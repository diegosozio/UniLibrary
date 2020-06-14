import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/Models/book.model';
import { User } from 'src/app/authentication/user/user';
import { AccountService } from 'src/app/authentication/account/account.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  user: User;
  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }
  @Input() book: Book;
  ngOnInit(): void {
  }

}
