import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LeftMenuComponent } from '../../core/left-menu/left-menu.component'

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  loading: boolean;
  cityName: string;
  countryName:string;
  leftMenuComponent: LeftMenuComponent;

  constructor() { }

  ngOnInit() {
    this.loading = false;
    this.cityName = '';
   // this.leftMenuComponent.ngOnInit;
   
  }

  public searchCity() {
    this.loading = !this.loading;
    console.log(this.cityName);
    //this.searchEvent.emit(this.cityName);
    this.leftMenuComponent.addCity(this.cityName,this.countryName);
    
  }

}
