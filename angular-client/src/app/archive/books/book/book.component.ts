import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/Models/book.model';
import { User } from 'src/app/authentication/user/user';
import { AccountService } from 'src/app/authentication/account/account.service';
import { BooksService } from 'src/app/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  user: User;
  reserve=false
  constructor(private accountService: AccountService, private bookService: BooksService, private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
  }
  @Input() book: Book;
  ngOnInit(): void {
  }
  onChange(event) {
    this.book.status=event
    this.bookService.editBook({book:this.book}).subscribe((data: any) => {
      
     
    });
  }
  onchange(event){
    console.log(event)
  }
  delete(id) {

    this.bookService.deleteBook(id).subscribe((data: any) => {
      window.location.href='/gallery'
    });;
  }

}
