import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('IsAuthenticatedGuard', () => {
  it('should be defined', () => {
    const result = new IsAuthenticatedGuard(new Reflector(), new JwtService());
    expect(result).toBeDefined();
  });
});
