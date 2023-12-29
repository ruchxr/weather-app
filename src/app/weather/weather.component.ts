import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  preservedCityName: string;
  cityName: string;
  humidity: number;
  temp: number;
  max_temp: number;
  min_temp: number;
  currentTime = new Date().getHours();
  isLoading = false;

  isNight: boolean = true;

  citySearched: boolean = false;

  constructor(private weatherService: WeatherService){
    if(this.currentTime > 17 || this.currentTime < 6){
      this.isNight = true;
    }
    else{
      this.isNight = false;
    }
    console.log(this.currentTime)
    console.log(this.isNight)
  }

  getWeather(){
    if(this.preservedCityName === this.cityName){
      return;
    }
    this.weatherService.getWeatherData(this.preservedCityName)
    this.isLoading = true;
    setTimeout(() => {
      this.citySearched = true;
      this.cityName = this.weatherService.currentWeather.name
      this.humidity = this.weatherService.currentWeather.main.humidity
      this.temp = this.weatherService.currentWeather.main.temp;
      this.max_temp = this.weatherService.currentWeather.main.temp_max;
      this.min_temp = this.weatherService.currentWeather.main.temp_min;
      console.log('City Name: ' + this.cityName);
      console.log('Humidity: ' + this.humidity);
      console.log('Temperature: ' + this.temp);
      console.log('Maximum Temperature: ' + this.max_temp);
      console.log('Minimum Temperature: ' + this.min_temp);
      this.isLoading = false;
    },3000)
  }
}
