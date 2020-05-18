import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from './Models/book.model';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  public getAllBooks() {
    return this.httpClient.get(`${API_URL}/books`);
  }

}
