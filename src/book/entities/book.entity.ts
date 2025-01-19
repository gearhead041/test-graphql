import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  author: string; //TODO add class here

  @Field()
  userBookmarks: string[];

  @Field()
  description: string;
}
