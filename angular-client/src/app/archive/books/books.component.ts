import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Models/book.model';
import { BooksService } from 'src/app/books.service';
import { AccountService } from 'src/app/authentication/account/account.service';
import { User } from 'src/app/authentication/user/user';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  user: User;
  constructor(private accountService: AccountService,private bookService: BooksService) {
      this.accountService.user.subscribe(x => this.user = x);
  }
  @Input() books: Array<Book>

  ngOnInit(): void {


  }

}
