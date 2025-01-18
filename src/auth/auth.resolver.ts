import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from 'src/user/dto/login.input';
import { AuthResponse } from './auth.entity';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.validateUser(loginInput);
  }
}
