import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/common/entities/user/user';
import { LoginDto } from 'src/common/dto/login.dto/login.dto';


@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('loginData') loginData: LoginDto) {
    const token = await this.authService.login(loginData);
    return token.access_token;
  }
}
