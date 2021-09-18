import React, { useState } from "react"
import { Box, IconButton, Paper } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { Flex, Form, InputBase } from '@wheat/core';
import { useForm } from 'react-hook-form';

import {
  Typography,
  Button,
} from '@material-ui/core';

import {
  get_coin_records_by_puzzle_hash,
  push_tx,
} from '../../modules/fullnodeMessages';

import {
  recover_pool_nft
} from '../../modules/message';

import { useDispatch } from 'react-redux';

import { decode as address_to_puzzle_hash } from '../../util/toBech32m'

const StyledInputBase = styled(InputBase)`
  min-width: 15rem;
`;

type FormData = {
  poolAddress: string;
  qdId: string;
};

let can_records: any[] = []
let pool_contract_hash: string = ""

export default function PoolCollection() {

  function dealSearchResult(records:any[]):string {

    let total = 0
    let can = 0
    const temp = []

    let record: any
    for(record of records) {
      let amount = record.coin.amount
      let timestamp = record.timestamp

      total += amount
      let current = (new Date()).getTime()/1000
      if ((current-timestamp)>604800) {
        can += amount
        temp.push(record.coin)
      }
    }

    can_records = temp
    return "Total Coins Not Recovered:" + total/1000000000000 + "<br/>" +
      "Total Coins Can Recovered:" + can/1000000000000
  }

  const dispatch = useDispatch();

  const methods = useForm<FormData>({
    shouldUnregister: false,
    defaultValues: {
      poolAddress: '',
      qdId: '',
    },
  });

  async function handleSearch(values: FormData) {
    let address = values.poolAddress
    if (address) {
      pool_contract_hash = ""
      can_records = []
      setContent(" ")

      try {
        let puzzlehash = address_to_puzzle_hash(address)
        const data = await dispatch(get_coin_records_by_puzzle_hash(puzzlehash));
        if (data.success) {
          pool_contract_hash = puzzlehash
          let result = dealSearchResult(data.coin_records)
          setContent(result)
        } else {
          alert(data.error)
        }
      } catch (error) {
        alert(error)
      }
    }
  }

  async function handleCollection(values: FormData) {
    let qdId = values.qdId
    if (!qdId) {
      alert("Input NFT Launcher Id")
      return
    }
    if (can_records.length < 1) {
      alert("Can not find any coins to recover, please enter the correct pool contract address and search.")
      return
    }

    try {
      console.log("======")
      console.log(can_records)
      const data = await dispatch(recover_pool_nft(pool_contract_hash, qdId, can_records));
      console.log(data)
      console.log("======")
      if (data.success) {
        let spend_bundle = data.spend_bundle
        console.log(spend_bundle)
        const pushTxData = await dispatch(push_tx(spend_bundle));
        console.log(pushTxData)
        if (pushTxData.success) {
          alert("success")
        } else {
          alert(pushTxData.error)
        }
      } else {
        alert(data.error)
      }
    } catch (error) {
      alert(error)
    }
  }


  const [typography, setContent] = useState(" ")
  return (
    <Flex flexDirection="column" gap={3}>

      <Typography variant="body1" color="textSecondary">
        Enter your chia pool contract address and NFT Launcher ID to recover the missing WHEAT from your plot NFT.
      </Typography>

      <Form methods={methods} onSubmit={handleSearch}>
        <Paper elevation={0} variant="outlined">
          <Flex alignItems="center" gap={1}>
            <Box />
            <StyledInputBase
              name="poolAddress"
              placeholder='Pool Contract Address'
              fullWidth
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Flex>
        </Paper>
      </Form>

      <Typography variant="body1" color="textSecondary"  dangerouslySetInnerHTML={{__html: typography}}>
      </Typography>

      <Form methods={methods} onSubmit={handleCollection}>
      <Paper elevation={0} variant="outlined">
          <Flex alignItems="center" gap={1}>
            <Box />
            <StyledInputBase
              name="qdId"
              placeholder='NFT Launcher Id'
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              RECOVER
            </Button>
          </Flex>
        </Paper>
      </Form>

    </Flex>
  );
}
