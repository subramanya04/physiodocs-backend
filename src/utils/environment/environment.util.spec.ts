import { getEvironmentOptions } from './environment.util';

describe('getEvironmentOptions', () => {
  it('should contain the env variables', () => {
    const result = getEvironmentOptions();
    expect(result).toEqual(process.env);
  });
});
