import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  username: string;
  @Field()
  email: string;
  password: string;
}

