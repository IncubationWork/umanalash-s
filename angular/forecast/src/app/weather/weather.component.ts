import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location:string = 'tenkasi';
  latitude:number=0;
  longitude:number=0;
  temperatureData:any={};
  weatherData: any = {};
  date=new Date();
  filteredPlace:any[]=[];
  count:any[]=[];

  constructor(
    private weatherservice: WeatherService,private shareService: ShareService) { }

ngOnInit(): void {
  this.searchWeather();
}
    searchWeather() {
      this.weatherservice.getWeatherData(this.location,10).subscribe(res => {
        this.weatherData = res;
        console.log("WeatherData:", res);
        if (res.results && res.results[0] ) {
          this.latitude = res.results[0].latitude;
          this.longitude = res.results[0].longitude;
          console.log('Current Location:', this.location);
  
          
        this.shareService.setLocation(this.location); 

          this.weatherservice.getCoordinates(this.latitude, this.longitude).subscribe(response => {
            this.temperatureData.weather = response;
            this.location = this.weatherData.results[0].name;
            this.shareService.setTemperatureData(this.temperatureData);
            this.shareService.setWeatherData(res);
            console.log('Temperature Data:', response);
            console.log('Updated Location:', this.location);
          });
        }
      });
    }
    changePlace(value:string) {
      if(value.trim()=== '') {
        this.filteredPlace = [];
      }
      this.weatherservice.getWeatherData(value,10).subscribe(response => {
        this.filteredPlace=response.results;
      });
    }
    selectPlace(city:any) {
      this.location = this.location;
      this.filteredPlace=[];
      this.searchWeather();
    }
    getWeatherDescription(weatherCode: number): string {
      let description:string;

      switch(weatherCode) {
      case 0:
        description='Clear sky';
        break;
      case 1:
        description='Mainly clear';
        break;
      case 2:
        description='Light clouds';
        break;
      case 3:
        description='Partly cloudy';
        break;
      default:
        description = 'Unknown';
        break;
    };
    return description;
  }
}
     /* 2: 'Light clouds',
      3: 'Partly Cloudy',
      4: 'Cloudy',
      5: 'Rain',
      6: 'Rain and snow/sleet',
      7: 'Snow',
      8: 'Rain Shower',
      9: 'Snow Shower',
      10:'Sleet Shower',
      11:'Light Fog',
      12:'Dense Fog',
      13:'Freezing rain',
      14:'Thunderstorms',
      15:'Drizzle',
      16:'Sandstorm'*/
      // ... add more descriptions for other weather codes ...


