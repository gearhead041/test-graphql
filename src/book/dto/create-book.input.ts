import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: number;

  @Field({ nullable: true })
  description: number;

  @Field()
  authorId: string;
}
