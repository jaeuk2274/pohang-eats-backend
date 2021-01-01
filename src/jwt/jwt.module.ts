import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt-constanst';
import { jwtModuleOprions } from './jwt-interfaces';
import { JwtService } from './jwt.service';

@Module({})
@Global()
export class JwtModule {
    static forRoot(options: jwtModuleOprions): DynamicModule{
        return{
            module : JwtModule,
            providers : [
                {
                    provide: CONFIG_OPTIONS,
                    useValue: options
                },
                JwtService // == {provide: JwtService, useClass: JwtService}
                
            ],
            exports : [JwtService],
           
        }
    } 
}