import { Component, OnInit } from '@angular/core';
import { Book } from '../../Models/book.model';
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService) { }
  books : Array<Book>

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data:Array<Book>)=>{
     
      this.books = data;
    });
  
  }

}
