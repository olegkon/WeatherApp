import {Inject, Injectable, OpaqueToken} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {weatherRow} from '../components/weatherRow';

export const WEATHER_URL_BASE = new OpaqueToken('WeatherUrlBase');
export const WEATHER_URL_SUFFIX = new OpaqueToken('WeatherUrlSuffix');

export interface WeatherResult {
  place: string;
  country: string;

  temperature: number; //string;
  humidity: number; //string;
  pressure: number; //string;
  min_temp: number; //string;
  max_temp:  number; //string;
  wind:  number; //string;
  precip:  string;
  clouds: number;

  temperature1: number;
  humidity1: number;
  pressure1: number;
  min_temp1: number;
  max_temp1: number;
  wind1:   number;
  clouds1: number;
  precip1: string;

  wdata: Array<weatherRow>;
}


@Injectable()
export class WeatherService {

  constructor(
      private http: Http,
      @Inject(WEATHER_URL_BASE) private urlBase: string,
      @Inject(WEATHER_URL_SUFFIX) private urlSuffix: string) {
  }


  getWeather(city: string): Observable<WeatherResult> {
    return this.http
        .get(this.urlBase + city + this.urlSuffix)
        .map((response: Response) => response.json())
        .filter(this._hasResult)
        .map(this._parseData);
  }


  private _hasResult(data): boolean {
    return data['cod'] !== '404' && data.list[0]; //main;
  }


  private _parseData(data): WeatherResult {

    var wdata1: weatherRow[] = new Array<weatherRow>();

    wdata1[0] = new weatherRow("Today", data.list[0].main.temp, data.list[0].main.humidity, data.list[0].main.pressure, data.list[0].main.temp_min,
        data.list[0].main.temp_max, data.list[0].wind.speed, data.list[0].clouds.all,  data.list[0].weather[0].main);

    wdata1[1] = new weatherRow("Tomorrow", data.list[1].main.temp, data.list[1].main.humidity, data.list[1].main.pressure, data.list[1].main.temp_min,
        data.list[1].main.temp_max, data.list[1].wind.speed, data.list[1].clouds.all,  data.list[1].weather[0].main);

    wdata1[2] = new weatherRow("Day after tomorrow", data.list[2].main.temp, data.list[2].main.humidity, data.list[2].main.pressure, data.list[2].main.temp_min,
        data.list[2].main.temp_max, data.list[2].wind.speed, data.list[2].clouds.all,  data.list[2].weather[0].main);


    //   wdata1[0].temperature = data.list[0].main.temp;
    //   wdata1[0].humidity = data.list[0].main.humidity;
/*
     wdata1[0].temperature = data.list[0].main.temp;
     wdata1[0].humidity = data.list[0].main.humidity;
     wdata1[0].pressure = data.list[0].main.pressure;
     wdata1[0].temp_min = data.list[0].main.temp_min;
     wdata1[0].temp_max = data.list[0].main.temp_max;
     wdata1[0].wind = data.list[0].wind.speed;
     wdata1[0].clouds = data.list[0].clouds.all;
     wdata1[0].precip = data.list[0].weather[0].main;

     wdata1[1].temperature = data.list[1].main.temp;
     wdata1[1].humidity = data.list[1].main.humidity;
     wdata1[1].pressure = data.list[1].main.pressure;
     wdata1[1].temp_min = data.list[1].main.temp_min;
     wdata1[1].temp_max = data.list[1].main.temp_max;
     wdata1[1].wind = data.list[1].wind.speed;
     wdata1[1].clouds = data.list[1].clouds.all;
     wdata1[1].precip = data.list[1].weather[0].main;
*/

    return {
/*    place: data.name || 'unknown',
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      wind: data.wind.speed,
      precip: data.weather[0].main,
      clouds: data.clouds.all
*/
      place: data.city.name || 'unknown',
      country: data.city.country,
      temperature: data.list[0].main.temp,
      humidity: data.list[0].main.humidity,
      pressure: data.list[0].main.pressure,
      min_temp: data.list[0].main.temp_min,
      max_temp: data.list[0].main.temp_max,
      wind: data.list[0].wind.speed,
      precip: data.list[0].weather[0].main,
      clouds: data.list[0].clouds.all

      , temperature1: data.list[1].main.temp,
      humidity1: data.list[1].main.humidity,
      pressure1: data.list[1].main.pressure,
      min_temp1: data.list[1].main.temp_min,
      max_temp1: data.list[1].main.temp_max,
      wind1: data.list[1].wind.speed,
      clouds1: data.list[1].clouds.all,
      precip1: data.list[1].weather[0].main

     , wdata: wdata1

      /*
       //temperature: data.list[0].main.temp,  //first.main.temp,
       wdata[0].temperature: data.list[0].main.temp,  //first.main.temp,
       wdata[0].humidity: data.list[0].main.humidity, //first.main.humidity,
       wdata[0].pressure: data.list[0].main.pressure, //first.main.pressure,
       wdata[0].temp_min: data.list[0].main.temp_min, //first.main.temp_min,
       wdata[0].temp_max: data.list[0].main.temp_max, //first.main.temp_max,
       wdata[0].wind: data.list[0].wind.speed, // first.wind.speed,
       wdata[0].clouds: data.list[0].clouds.all, // first.clouds.all,
       wdata[0].precip: data.list[0].weather[0].description,   //first.weather[0].description

       wdata[1].temperature: data.list[1].main.temp,  //first.main.temp,
       wdata[1].humidity: data.list[1].main.humidity, //first.main.humidity,
       wdata[1].pressure: data.list[1].main.pressure, //first.main.pressure,
       wdata[1].temp_min data.list[1].main.temp_min, //first.main.temp_min,
       wdata[1].temp_max: data.list[1].main.temp_max, //first.main.temp_max,
       wdata[1].wind: data.list[1].wind.speed, // first.wind.speed,
       wdata[1].clouds: data.list[1].clouds.all, // first.clouds.all,
       wdata[1].precip: data.list[1].weather[0].description
       */
    };

  }

}