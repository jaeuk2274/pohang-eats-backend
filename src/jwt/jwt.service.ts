import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt-constanst';
import { jwtModuleOprions } from './jwt-interfaces';

@Injectable()
export class JwtService {
    constructor(@Inject(CONFIG_OPTIONS) private readonly options:jwtModuleOprions){
        console.log("BANANA-", options);
    }
    hello() {
        console.log('hello');
    }
}
