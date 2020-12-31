import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./users.service";

@Resolver(of => User)
export class UserResolve{
    constructor(private readonly users: UserService) {}

    @Mutation(returns => CreateAccountOutput)
    async createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<CreateAccountOutput> {
        
        console.log("createAccount", createAccountInput);
        try {
            const error = await this.users.createAccount(createAccountInput);
            if (error) {
              return {
                ok: false,
                error,
              };
            }
            return {
              ok: true,
            };
          } catch (error) {
            return {
              error,
              ok: false,
            };
        }
    }
}