import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home/home.service';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList: Movie[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getMovies().subscribe((res: Movie[]) => {
      this.moviesList = res;
    })
  }

  onSearchClicked($event) {
    this.homeService.getMovies($event).subscribe((res: Movie[]) =>{
      this.moviesList = res;
    })
  }
}
