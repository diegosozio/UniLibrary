import { genre } from './genre.model';
import { Author } from './author.model';
import { type } from './type.model';

export class Book {
    id:number;
    title: string;
    year: number;
    image: string;
    status: boolean;
    genre : genre
    author : Author
    type: type
    format: string
}