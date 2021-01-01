import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // context : http -> graphql 좀 다름
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user = gqlContext['user'];
    console.log(user);
    if (!user) {
      return false;
    }
    return true;
  }
}
