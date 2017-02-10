import {Routes} from '@angular/router'
import { MoviesComponent } from './movies/movies.component';
import { CardsComponent } from './cards/cards.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'cards', component: CardsComponent },
];