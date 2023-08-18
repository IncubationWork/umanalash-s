import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location = 'tenkasi';
  counts:number=10;
  latitude:number=0;
  longitude:number=0;
  temperatureData:any={};
  weatherData: any = {};

  constructor(
    private service: WeatherService) { }

ngOnInit(): void {
  this.searchWeather();
}
    searchWeather() {
      this.service.getWeatherData(this.location).subscribe(res => {
        this.weatherData = res;
        console.log("WeatherData:", res);
  
        if (res.results && res.results[0]) {
          this.latitude = res.results[0].latitude;
          this.longitude = res.results[0].longitude;
  
          this.service.getCoordinates(this.latitude, this.longitude).subscribe(response => {
            this.temperatureData.weather = response;
            console.log('Temperature Data:', response);
          });
        }
      });
    }

}


