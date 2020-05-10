import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
