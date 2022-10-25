import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../../decorators';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService
  ) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) {
      return true;
    }
    const [req] = context.getArgs();
    if (!req?.headers?.authorization) {
      return false;
    }
    const [, token] = req.headers.authorization.split(' ');
    if (!token) {
      return false;
    }
    const user = this.jwtService.verify(token);
    if (!user || user.eat < Date.now()) {
      return false;
    }
    return !!user;
  }
}
