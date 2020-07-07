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
      console.log("archive with books: "+ myBooks.length)

      myBooks.forEach(element => {
        console.log("Book title : "+ element.title)
        console.log("Book genre: "+ element.genre)
        console.log("Book format: "+ element.format)

        for(var key in element.author) {
          var value = element.author[key];
          console.log("Book author "+key+": " + value)
      }
      });
      this.books = myBooks;
      console.log("AFTER RECEIVING DATA");
      
      this.books.forEach(element => {
        console.log("Book title : "+ element.title)
        console.log("Book genre: "+ element.genre)
        console.log("Book format: "+ element.format)

        for(var key in element.author) {
          var value = element.author[key];
          console.log("Book author "+key+": " + value)
        }
      });
    }); 
    }

  refreshBooks(data){
    console.log(data)
    this.bookService.getAllBooks(data).subscribe((data: Array<Book>) => {
      this.books = data;
    });
    
  }

}
