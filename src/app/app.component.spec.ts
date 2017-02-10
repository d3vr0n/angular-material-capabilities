/* tslint:disable:no-unused-variable */

import { MaterialModule } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

let mockRouter:any;
    class MockRouter {
        //noinspection TypeScriptUnresolvedFunction
        navigate = jasmine.createSpy('navigate');
    }

describe('AppComponent', () => {
  beforeEach(async(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MaterialModule.forRoot()
      ],
      providers: [ { provide: Router, useValue: mockRouter }],
    });
    TestBed.compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet').length).toBe(1);
  }));
});
