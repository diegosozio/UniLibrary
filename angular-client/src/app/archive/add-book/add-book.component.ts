import { Component, OnInit } from '@angular/core';
import { genre } from 'src/app/Models/genre.model';
import { bookType } from 'src/app/Models/bookType.model';
import { Author } from 'src/app/Models/author.model';
import { BooksService } from 'src/app/books.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/Models/book.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  genres: Array<genre>;
  bookTypes: Array<bookType>;
  authors: Array<Author>;
  years: Array<number>=[];
  selectedGenre: genre = { _id: 0, title: 'Genre' }
  selectedType: bookType = { _id: 0, title: 'Type' }
  selectedAuthor: Author = { _id: 0, name: 'Author' }
  selectedYear: any = 'Year';
  bookToAdd:any= 
  {
    title: '',
    year: 2000,
    image: '',
    genre : '',
    author : '',
    bookType: '',
    format: '',
    status: false,
};
  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllGeneres().subscribe((data: Array<genre>) => {
      this.genres = data;
    });
    this.bookService.getAllBookTypes().subscribe((data: Array<bookType>) => {
      this.bookTypes = data;
    });
    this.bookService.getAllAuthors().subscribe((data: Array<Author>) => {
      this.authors = data;
    });
    this.generateArrayOfYears();

  }
  generateArrayOfYears() {
    var max = new Date().getFullYear()
    max = max-50;
    var min = max - 5
  
    for (var i = max; i >= min; i--) {
      this.years.push(i)
    }
  }
  changeGenre(genre: genre) {
    this.selectedGenre = genre
    this.bookToAdd.genre=genre
  }
  changeType(bookType: bookType) {
    this.selectedType = bookType
    this.bookToAdd.bookType=bookType
  }
  changeAuthor(author: Author) {
    this.selectedAuthor = author
    this.bookToAdd.author = author
  }
  changeYear(year) {    
    this.selectedYear = year
    this.bookToAdd.year = year
  }
  submit(){
    this.bookService.addBook(this.bookToAdd).subscribe((data: any) => {
      this.router.navigate(['/gallery']);
     
    });
  }
}
