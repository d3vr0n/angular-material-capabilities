/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should searchMovieByTitle returns 2 record', () => {
    spyOn(component.movieSvc,'searchMovieByTitle').and.callFake(function(){
        return Rx.Observable.create(observer =>{
          observer.onNext([{},{}]);
          observer.onCompleted();
        });
    });
    component.searchMovie = {
      title : 'Kingsman'
    };

    component.searchMovieByTitle();

    expect(component.movieList.length).toBe(2);
  });
  it('should getMovieById return 1 record', () => {
    spyOn(component.movieSvc,'getMovieDetails').and.callFake(function(){

    });

    component.getMovieById();

    expect(component.selectedMovie.title).toBeTruthy();
  });

});
