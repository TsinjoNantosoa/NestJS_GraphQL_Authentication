import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/common/entities/user/user';
import { CreateUserDto } from 'src/common/dto/create-user.dto/create-user.dto';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  async user(@Args('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Mutation(() => User)
  async createUser(@Args('userData') userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }
}
