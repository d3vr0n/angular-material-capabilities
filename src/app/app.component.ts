import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog,MdDialogConfig } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public flags:any = <any>{
    isDarkTheme : false
  };

  //@ViewChild('sidenav') sidenav:MdSidenav;



}
