import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { JwtService } from './jwt.service';

@Injectable()
export class jwtMiddleWare implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];
      console.log('token -', token);
    }
    next();
  }
}
