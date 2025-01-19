import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService {
  create(createBookInput: CreateBookInput) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  getUserBookmarks(id: string) {

  }

  findOne(id: string) {
    return `This action returns a #${id} book`;
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
