import { Component, OnInit } from '@angular/core';
import { genre } from '../../Models/genre.model';
import { type } from '../../Models/type.model';
import { Author } from '../../Models/author.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  genres: Array<genre>;
  types: Array<type>;
  authors: Array<Author>;
  years: Array<number>;
  selectedGenre : genre = {id:0 , title:'Genre'}
  selectedType : type = {id:0 , title:'Type'}
  selectedAuthor : Author = {id:0 , name:'Author'}
  selectedYear: any = 'Year';
  constructor() { }

  ngOnInit(): void {
    this.genres = [
      {
        id: 1, title: "Fantazy"
      },
      {
        id: 2, title: "Adventure"
      },
      {
        id: 3, title: "Romance"
      }]

    this.types = [
      {
        id: 1, title: "Fiction"
      },
      {
        id: 2, title: "Non-fiction"
      }]

    this.authors = [
      {
        id: 1, name: "William Shakespeare"
      },
      {
        id: 2, name: "Agatha Christie"
      },
      {
        id: 3, name: "Barbara Cartland"
      }
      ,
      {
        id: 4, name: "Danielle Steel"
      }]

      this.years = [2000,2001]

  }

  changeGenre(genre:genre){
    this.selectedGenre = genre
  }
  changeType(type:type){
    this.selectedType = type
  }
  changeAuthor(author:Author){
    this.selectedAuthor = author
  }
  changeYear(year){
    this.selectedYear = year
  }
 

}
