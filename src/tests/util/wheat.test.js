const wheat = require('../../util/wheat');

describe('wheat', () => {
  it('converts number mojo to wheat', () => {
    const result = wheat.mojo_to_wheat(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to wheat', () => {
    const result = wheat.mojo_to_wheat('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to wheat string', () => {
    const result = wheat.mojo_to_wheat_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to wheat string', () => {
    const result = wheat.mojo_to_wheat_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number wheat to mojo', () => {
    const result = wheat.wheat_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string wheat to mojo', () => {
    const result = wheat.wheat_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = wheat.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = wheat.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = wheat.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = wheat.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = wheat.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = wheat.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
