import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { WeatherService } from '../weather.service';
import { count } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  weekDates : Date[] = [];
  boxDatas :any[] = [];
  location:string = '';

  moveLeft = false;
  moveRight = false;

  temperatureData: any = {}; 
  sidebarData: any = {}; 
  weatherData: any = {};

  constructor(private shareService:ShareService,
              private weatherService: WeatherService) {
    this.calculateWeekDates();
    this.initializeWeekData();
  }

  calculateWeekDates() {
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      this.weekDates.push(nextDate);
    }
  }

  initializeWeekData() {
    for(let i = 0; i < 7; i++) {
      const forecastDay = {
        date: this.weekDates[i],
        temperature: 0,
        humidity: 0,
        
      };
      const hourlyTemperatures = this.temperatureData.weather?.hourly.temperature_2m;
      if (hourlyTemperatures) {
        const startIndex = i * 24;
        const endIndex = startIndex + 24;
        const dailyTemperatureSum = hourlyTemperatures.slice(startIndex, endIndex).reduce((sum:number, temp:number) => sum + temp, 0);
        forecastDay.temperature = dailyTemperatureSum / 24;
      }
  
      const hourlyHumidity = this.temperatureData.weather?.hourly.relativehumidity_2m;
      if (hourlyHumidity) {
        const startIndex = i * 24;
        const endIndex = startIndex + 24;
        const dailyHumiditySum = hourlyHumidity.slice(startIndex, endIndex).reduce((sum:number, humidity:number) => sum + humidity, 0);
        forecastDay.humidity = dailyHumiditySum / 24;
      }
      this.boxDatas.push(forecastDay);
      
    }

  }

  ngOnInit() {
    this.shareService.getLocation().subscribe((location) => {
      this.location = location;
    
      if (location) {
        this.weatherService.getWeatherData(location,10).subscribe(
          (res: any) => {
            this.sidebarData = res;
            if (res.results && res.results[0]) {
              const latitude = res.results[0].latitude;
              const longitude = res.results[0].longitude;
              this.weatherService.getCoordinates(latitude, longitude).subscribe(
                (response: any) => {
                  this.temperatureData.weather = response;
                },
                (error: any) => {
                  console.log('Error fetching temperature data:', error);
                }
              );
            }
          },
          (error: any) => {
            console.log('Error fetching weather data:', error);
          }
        );
      }
    });
  }


  moveBox(direction: 'left' | 'right'){
    if(direction === 'left'){
      this.weekDates.push(this.weekDates.shift()!);
      this.moveLeft = true;
      setTimeout(() => (this.moveLeft = false), 500);
    } else if (direction === 'right') {
      this.weekDates.unshift(this.weekDates.pop()!);
      this.moveRight = true;
      setTimeout(() => {
        this.moveRight =false;
      }, 500);
    }

  }
}