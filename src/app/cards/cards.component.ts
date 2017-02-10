import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public cardsSvc:CardsService) { }

  deck;
  deckId = "jodah7i5qc8x";
  message = "";
  showCard = false;
  deckOfCards;
  cardsMap = {
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'JACK':11,
    'QUEEN':12,
    'KING':13,
    'ACE':14,
  }
  
  /* = [{
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }];*/

  higherClickHandler(){
    this.showCard = true;
    //compare against opponent
    if(this.cardsMap[this.deckOfCards[1].value] > this.cardsMap[this.deckOfCards[0].value]){
      this.message = 'You Win !!';
    }else{
      this.message = 'Better Luck Next Time !!';
    }
  }
  lowerClickHandler(){
    this.showCard = true;
    //compare against opponent
    if(this.cardsMap[this.deckOfCards[1].value] < this.cardsMap[this.deckOfCards[0].value]){
      this.message = 'You Win !!';
    }else{
      this.message = 'Better Luck Next Time !!';
    }
  }
  tryAgainHandler(){
    this.message = '';
    this.showCard = false;
    this.deckOfCards = [{},{}];
  }

  createDeck(){
    this.cardsSvc.getNewDeck()
    .subscribe(ret =>{debugger;
        this.deck = ret;
        this.deckId = this.deck.deck_id;
    });
  }
  drawTwoCards(){
    this.cardsSvc.drawTwoCardFromDeck(this.deckId)
    .subscribe(ret =>{
        this.deckOfCards = ret;
    });
  }

  ngOnInit() {
    this.deckOfCards = [{},{}];
  }

}
