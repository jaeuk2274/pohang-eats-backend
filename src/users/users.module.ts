import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolve } from './users.resolve';
import { UserService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolve, UserService],
})
export class UsersModule {}
