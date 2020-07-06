import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/Models/author.model';
import { bookType } from 'src/app/Models/bookType.model';
import { genre } from 'src/app/Models/genre.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  genres: Array<genre>;
  bookTypes: Array<bookType>;
  authors: Array<Author>;
  years: Array<number>=[];
  selectedGenre: genre = { _id: 0, title: 'Genre' }
  selectedType: bookType = { _id: 0, title: 'Type' }
  selectedAuthor: Author = { _id: 0, name: 'Author' }
  selectedYear: any = 'Year';
  reservations : any =[]
  bookToEdit:any= 
  {
    _id:0,
    title: '',
    year: 2000,
    image: '',
    genre : '',
    author : '',
    bookType: '',
    format: '',
    status:false
};
  constructor(private bookService: BooksService, private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     
      this.bookService.getBook(params.get('id')).subscribe((data: any) => {
        this.bookToEdit=data
        this.selectedGenre=data.genre;
        this.selectedAuthor=data.author;
        this.selectedType=data.bookType
        this.selectedYear=data.year
        this.bookService.getReservations(this.bookToEdit._id).subscribe((data: any) => {
          this.reservations = data.reservations;
        });
      });
      
    });
    
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
    this.bookToEdit.genre=genre
  }
  changeType(bookType: bookType) {
    this.selectedType = bookType
    this.bookToEdit.bookType=bookType
  }
  changeAuthor(author: Author) {
    this.selectedAuthor = author
    this.bookToEdit.author = author
  }
  changeYear(year) {    
    this.selectedYear = year
    this.bookToEdit.year = year
  }
  submit(){
   
    this.bookService.editBook({book:this.bookToEdit}).subscribe((data: any) => {
      this.router.navigate(['/gallery']);
     
    });
  }

}
