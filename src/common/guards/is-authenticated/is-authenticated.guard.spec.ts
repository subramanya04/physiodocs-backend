import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('IsAuthenticatedGuard', () => {
  it('should be defined', () => {
    expect(
      new IsAuthenticatedGuard(new Reflector(), new JwtService())
    ).toBeDefined();
  });
});
