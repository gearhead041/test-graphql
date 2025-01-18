import { Schema } from 'mongoose';
import { InputType, Field, } from '@nestjs/graphql';

@InputType()
export class UpdatePasswordInput  {
  @Field(() => String)
  id: string;

  @Field()
  passsword: string;
}
