import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{schema: UserSchema, name: User.name}])],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}
