import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../Models/book.model';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private bookService: BooksService) { }
  books: Array<Book>

  ngOnInit(): void {


    var data = {
      query: "",
      author: "",
      genre: "",
      year: "",
      type: ""
    }
    this.bookService.getAllBooks(data).subscribe((myBooks: Array<Book>) => {
      this.books = myBooks;
      }); 
    }

  refreshBooks(data){
    console.log(data)
    this.bookService.getAllBooks(data).subscribe((data: Array<Book>) => {
      this.books = data;
    });
    
  }

}
