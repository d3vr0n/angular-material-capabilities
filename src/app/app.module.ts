import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// angular material
import { MaterialModule } from '@angular/material';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { CardsService } from './cards/cards.service';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardsComponent,
    CardsComponent
  ],
  entryComponents:[AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    MaterialModule.forRoot()
  ],
  providers: [MoviesService,CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
