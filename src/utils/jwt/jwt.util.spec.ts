import { getJwtOptions } from './jwt.util';

describe('getJwtOptions', () => {
  it('should return the JWT_SECRET', () => {
    const result = getJwtOptions();
    expect(result).toEqual({
      secret: process.env.JWT_SECRET
    });
  });
});
