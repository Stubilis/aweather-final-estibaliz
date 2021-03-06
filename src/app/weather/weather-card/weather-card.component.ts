import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import { Forescast } from '../forescast.model';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();
  weather_un;
  cityName: string;

  constructor(
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this._activatedRoute.params.subscribe(params => {
      this.cityName = <string>(params['cityName'] ? params['cityName'] : 'madrid,es');
      this.getWeather(this.cityName);
    });
  }

  public getColorTemperature(): string {
    if (this.weather !== undefined && this.weather.temperature >= 24) {
      return '#EF6C00';
    }

    if (this.weather !== undefined && this.weather.temperature <= 10) {
      return '#0277BD';
    }

    return '#212121';
  }

  getWeather(cityName:string){
    this._weatherService.getWeatherInfo(cityName).subscribe( 
      res => {
        console.log(res);
        this.weather_un =res},
      err=>console.log(err)
    );
  }
}
