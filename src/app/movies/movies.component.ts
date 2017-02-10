import { Component, OnInit,TemplateRef } from '@angular/core';

import { MovieModel } from './movieModel';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
   public searchMovie;
   public movieCastList;
   public selectedMovie;
   public movieList:any;
   public castProfilePicUrlBase = '//image.tmdb.org/t/p/w264_and_h264_bestv2/';
   public moviePosterUrlBase = '//image.tmdb.org/t/p/w300_and_h450_bestv2';

  constructor(public movieSvc:MoviesService) { }

  searchMovieByTitle(){
    this.movieSvc.searchMovieByTitle(this.searchMovie.title)
    .subscribe(resp => {
            this.movieList = resp;
          });
  }
  getMovieById(){

    this.searchMovie = this.selectedMovie;
    this.movieSvc.getMovieDetails(this.searchMovie.id)
    .subscribe(resp => {
            this.selectedMovie = resp;
            this.selectedMovie.popularity = Number(this.selectedMovie.popularity) * 10;

            //get cast
            this.getMovieCreditListById(this.selectedMovie.id);
          });
  }
  getMovieCreditListById(id:string){
    this.movieSvc.getMovieCreditDetails(id)
    .subscribe(resp => {
            this.movieCastList = resp;
          });
  }

  ngOnInit() {
    this.movieList = [];
    this.movieCastList = [];
    this.searchMovie = {
      id:207703 //kingsman
    };
    this.selectedMovie = {
      popularity : 67.1533,
      id:207703//kingsman
    }
      ;
    this.getMovieById();
  }

}
