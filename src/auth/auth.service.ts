import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginInput } from 'src/user/dto/login.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthResponse } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
    private config: ConfigService
  ) { }
  
  async validateUser(loginUserInput: LoginInput): Promise<AuthResponse> {
    const { username, password } = loginUserInput;
    const user = await this.userService.findOneByUsername(username);
    const isMatch = await bcrypt.compare(password, user?.password);
    const token = await this.jwt.signAsync(
      { userId: user.id, email: user.email },
    );

    if (!user || !isMatch) {
      throw new Error('Wrong username or password');
    }

    return {
      username,
      token,
    };
  }


}
