import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from 'src/services/home/home.service';
import { Movie } from 'src/model/movie';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  showAutoComplete: boolean = false;
  autoCompleteSearchkeywords: Movie[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    window.addEventListener('click',() =>{
      this.showAutoComplete=false;
    })
  }

  autoComplete() {
    this.showAutoComplete = true;
    debounceTime(500);
    this.homeService.getMovies(this.searchText).subscribe((res: Movie[]) => {
      this.autoCompleteSearchkeywords = res;
    })
  }
  onSearch() {
    this.showAutoComplete = false;
    this.clicked.emit(this.searchText);
  }

  onSearchAutoComplete(movieName: string) {
    this.showAutoComplete = false;
    this.clicked.emit(movieName);
  }
}
