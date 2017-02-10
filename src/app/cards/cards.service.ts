
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CardsService {
	constructor (private http: Http) {}

    private docBaseUrl = 'https://deckofcardsapi.com/api/deck/';


    getNewDeck():Observable<Object> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

        let requestUrl = this.docBaseUrl + 'new/shuffle/?deck_count=1';
		return this.http.get(requestUrl, options)
		                  .map((res) => res.json())
		                  .catch(this.handleError);
    }

    drawTwoCardFromDeck(deckId : string):Observable<Object[]> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

        let requestUrl = this.docBaseUrl + deckId + '/draw/?count=2';
		return this.http.get(requestUrl, options)
		                  .map((res) => res.json().cards)
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