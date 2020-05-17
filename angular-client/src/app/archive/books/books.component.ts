import { Component, OnInit } from '@angular/core';
import { Book } from '../../Models/book.model';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }
  books : Array<Book>
  ngOnInit(): void {
    this.books = [
      {
        id:1,
        title: 'First book',
        year: 2005,
        image: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg',
        status: true,
        genre : {
          id:1,
          title:'Fantazy'
        },
        author : {
          id:2,
          name:'Agatha Christie'
        },
        bookType: {
          id:1,
          title:'Fiction'
        },
        format: 'electronic'
      }
    ]
  }

}
