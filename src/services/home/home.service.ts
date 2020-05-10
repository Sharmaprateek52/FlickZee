import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  /** GET movies from search */
  getMovies(searchText?: string) {
    debounceTime(500)
    return this.httpClient.get(`http://localhost:3000/movies?searchText=${searchText}`);
  }
}
