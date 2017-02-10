
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { MovieModel } from './MovieModel'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MoviesService {
	constructor (private http: Http) {}

    private moviedbUrl = 'https://api.themoviedb.org/3/movie/';
    private moviedbSearchUrl = 'https://api.themoviedb.org/3/search/movie/'
    private moviedbAPIKey = '?api_key=fa4681fb5238ee5eaac3713e6b7d3c57'; 
    private movieListUrl = '/api/fetch/getmovieList';  // URL to web API
    private movieDetails = '/api/fetch/getbyid/';

    searchMovieByTitle(title:string):Observable<MovieModel[]> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

        let requestUrl = this.moviedbSearchUrl + this.moviedbAPIKey + '&language=en-US&query=' + title + '&page=1&include_adult=false';
		return this.http.get(requestUrl, options)
		                  .map((res) => res.json().results)
		                  .catch(this.handleError);
    }

    getMovieDetails(objectId : string): Observable<MovieModel> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

        let requestUrl = this.moviedbUrl + objectId + this.moviedbAPIKey;

        return this.http.get(requestUrl , options)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    getMovieCreditDetails(objectId : string): Observable<Object> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

        let requestUrl = this.moviedbUrl + objectId + '/credits' + this.moviedbAPIKey;

        return this.http.get(requestUrl , options)
            .map((res) => res.json().cast)
            .catch(this.handleError);
    }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
 
}
