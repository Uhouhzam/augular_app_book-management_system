import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  newBookTitle: string = '';
  newBookAuthor: string = '';

  books: BookModel[] = [];

  ngOnInit(): void {
    let saveBooks = localStorage.getItem('books');
    this.books = saveBooks ? JSON.parse(saveBooks) : [];
  }

  addBook() {
    if (this.newBookAuthor.trim().length && this.newBookTitle.trim().length) {
      let newBook: BookModel = {
        id: Date.now(),
        author: this.newBookAuthor,
        title: this.newBookTitle,
      };

      this.books.push(newBook);
      this.newBookAuthor = '';
      this.newBookTitle = '';
      localStorage.setItem('books', JSON.stringify(this.books));
      alert(this.books.length);
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
