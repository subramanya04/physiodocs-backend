import { SetMetadata } from '@nestjs/common';
import { IsPublic, IS_PUBLIC_KEY } from './is-public.decorator';

describe('IsPublic', () => {
  it('should return the meta data', () => {
    const result = IsPublic().toString();
    expect(result).toEqual(SetMetadata(IS_PUBLIC_KEY, true).toString());
  });
});
