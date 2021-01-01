import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/create-user.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
import { User } from "./entities/user.entity";
import * as jwt from "jsonwebtoken";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
        private readonly config: ConfigService
    ) {}

    async createAccount({email, password, role}: CreateAccountInput): Promise<{ ok: boolean; error?: string }>  {
        try{
            const exist = await this.users.findOne({ email }); // 잘 확인할것, ({})로는 해당 컨텐츠 확인, ()는 id
            if (exist) {
                return { ok: false, error: 'There is a user with that email already' };
            } 
            await this.users.save(this.users.create({email, password, role}));
            return { ok: true };
        }
        catch(e){
            return { ok: false, error: "Couldn't create account" };
        }
    }; 

    async login({email, password, }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }>  {
        // make a JWT and give it to the user
        try{
            const user = await this.users.findOne({email});
            if(!user){
                return { ok: false, error: "User not found", };
            }
            const passwordCorrect = await user.checkPassword(password);
            if(!passwordCorrect){
                return { ok: false, error: "Wrong password", };
            }
            const token = jwt.sign({ id: user.id }, this.config.get("SECRET_KEY"));
            return {
                ok: true,
                token: token,
            }
        } catch(error){
            return { ok: false, error };
        }
    }
}