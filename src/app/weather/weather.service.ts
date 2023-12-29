import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WeatherService{
    [x: string]: any;
    currentWeather: any;

    constructor(private httpClient: HttpClient){
        
    }

    getWeatherData(cityName: string){
        this.httpClient
        .get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=6e50e2470deb5856cf7b94db214ce1e6',
        {
            params: {
                units: 'metric'
            }
        })
        .subscribe((data) => {
            this.currentWeather = data;
            console.log(this.currentWeather)
        });
    }
}