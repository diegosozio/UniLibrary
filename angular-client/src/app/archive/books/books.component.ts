import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Models/book.model';
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService) { }
  @Input() books: Array<Book>

  ngOnInit(): void {


  }

}
