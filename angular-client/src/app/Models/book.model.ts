import { genre } from './genre.model';
import { Author } from './author.model';
import { bookType } from './bookType.model';

export class Book {
    _id:number;
    title: string;
    year: number;
    image: string;
    status: boolean;
    genre : genre
    author : Author
    bookType: bookType
    format: string
}