const ServiceName = {
  WALLET: 'wheat_wallet',
  FULL_NODE: 'wheat_full_node',
  FARMER: 'wheat_farmer',
  HARVESTER: 'wheat_harvester',
  SIMULATOR: 'wheat_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'chia_plotter',
  TIMELORD: 'wheat_timelord',
  INTRODUCER: 'wheat_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'wheat_data_layer',
  DATALAYER_SERVER: 'wheat_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
