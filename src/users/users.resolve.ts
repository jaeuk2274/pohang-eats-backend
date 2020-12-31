import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ok } from "assert";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./users.service";

@Resolver(of => User)
export class UserResolve{
    constructor(private readonly users: UserService) {}

    @Mutation(returns => CreateAccountOutput)
    async createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<CreateAccountOutput> {
        try {
            const { ok, error } =  await this.users.createAccount(
                createAccountInput,
            );
            return {
                ok,
                error,
            };
        } catch (error){
            ok : false
            error
        }

        
    }
}