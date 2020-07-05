import { Component, OnInit } from '@angular/core';
import { genre } from '../../Models/genre.model';
import { bookType } from '../../Models/bookType.model';
import { Author } from '../../Models/author.model';
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  genres: Array<genre>;
  bookTypes: Array<bookType>;
  authors: Array<Author>;
  years: Array<number>;
  selectedGenre: genre = { id: 0, title: 'Genre' }
  selectedType: bookType = { id: 0, title: 'Type' }
  selectedAuthor: Author = { id: 0, name: 'Author' }
  selectedYear: any = 'Year';
  constructor(private bookService: BooksService) { }

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
    this.years = [2000, 2001]

  }

  changeGenre(genre: genre) {
    this.selectedGenre = genre
  }
  changeType(bookType: bookType) {
    this.selectedType = bookType
  }
  changeAuthor(author: Author) {
    this.selectedAuthor = author
  }
  changeYear(year) {
    this.selectedYear = year
  }


}
