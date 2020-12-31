import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {}

    async createAccount({email, password, role}: CreateAccountInput): Promise<string | undefined>  {
        console.log("service", email, password, role);
        try{
            const exist = await this.users.findOne({email}); // 잘 확인할것, ({})로는 해당 컨텐츠 확인, ()는 id
            if(exist){
                return 'There is a user with that email already';
            } 
            await this.users.save(this.users.create({email, password, role}));
        }
        catch(e){
            return "Couldn't create account";
        }
    } 
}