import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input() moviesList: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
