import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from 'src/user/dto/login.input';
import { AuthResponse } from './entities/auth.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.validateUser(loginInput);
  }

  @Mutation(() => AuthResponse, {name: 'signup'})
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.signup(createUserInput);
  }
}
