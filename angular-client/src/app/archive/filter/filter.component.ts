import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { genre } from '../../Models/genre.model';
import { bookType } from '../../Models/bookType.model';
import { Author } from '../../Models/author.model';
import { BooksService } from 'src/app/books.service';
import { Book } from 'src/app/Models/book.model';
import { ArchiveComponent } from '../archive.component';
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
  selectedGenre: genre = { _id: 0, title: 'Genre' }
  selectedType: bookType = { _id: 0, title: 'Type' }
  selectedAuthor: Author = { _id: 0, name: 'Author' }
  selectedYear: any = 'Year';
  query: String ="";
  @Output() refreshBooksFunction: EventEmitter<any> = new EventEmitter<any>();
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
  search(){
    var data ={query:this.query,
    author: "",
    genre: "",
    year: "",
    type: ""}
    this.refreshBooksFunction.emit(data);
  }
  filter(){
    var data ={
      query:"",
      author: this.selectedAuthor._id==0?"":this.selectedAuthor._id,
      genre: this.selectedGenre._id==0?"":this.selectedGenre._id,
      year: this.selectedYear,
      type: this.selectedType._id==0?"":this.selectedType._id}
      this.refreshBooksFunction.emit(data);
  }


}
