import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./users.service";

@Resolver(of => User)
export class UserResolve{
    constructor(private readonly userService: UserService) {}

    @Mutation(returns => CreateAccountOutput)
    createAccount(@Args('input') createAccountInput: CreateAccountInput) {}
}