import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';   
import { MoviesListComponent } from './movies-list/movies-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
