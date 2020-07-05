import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/Models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }
  @Input() book: Book;
  ngOnInit(): void {
  }

}
