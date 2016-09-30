import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
 
import {WeatherService, WeatherResult} from '../services/weather.service';
import {weatherRow} from "./weatherRow";



@Component({
    selector: 'my-grid2',
    template: `
    	<br/>
    	<h2>Grid2 Component</h2> 
    	
    	<input type="text" placeholder="Enter city" [formControl]="searchInput1"/>
		    
      	<h3>Current weather in {{weather?.place}} {{weather?.country}}:</h3>     	
    	<!-- br/ -->        	    	
    	<ul>
    	    <li>Temperature: {{weather?.wdata[0].temperature}}F</li>
            <!--li>Temperature: {{weather?.temperature}}F</li -->
            <li>Humidity: {{weather?.wdata[0].humidity}}%</li>
        </ul>   	
    	<br/>
    	 <h3>Tomorrow: </h3>
        <ul>
            <li>Temperature: {{weather?.wdata[1].temperature}}F</li>
            <li>Humidity: {{weather?.wdata[1].humidity}}%</li>
        </ul> 
        <br/>
        <h3>Day after tomorrow: </h3>
        <ul>
            <li>Temperature: {{weather?.wdata[2].temperature}}F</li>
            <li>Humidity: {{weather?.wdata[2].humidity}}%</li>
        </ul>       
        <br/>
        <br/>
        
         <ag-grid-ng2 style="height:600px; width:855px"  
            class="ag-fresh" [gridOptions]="gridOptions" >
         </ag-grid-ng2 >
     `
})


export class Grid2Component {

 //myRowData = []; // this.myData ; //[ this.myData ];  //];  this.weather.wdata;
 /*
 { temperature: this.myData.temperature,
   humidity: this.myData.humidity,
   pressure: this.myData.pressure,
   wind: this.myData.wind,
   precipitation: this.myData.precip,
   clouds: this.myData.clouds,
   min_temp: this.myData.temp_min,
   max_temp: this.myData.temp_max
  }
 ];

{ temperature: {{weather?.temperature}},
    humidity: {{weather?.humidity}},
    pressure: {{weather?.pressure}},
    wind: {{weather?.wind}},
    precipitation: {{weather?.precip}},
    clouds: {{weather?.clouds}},
    min_temp: {{weather?.temp_min}},
    max_temp: {{weather?.temp_max}}
} ];
*/

    private gridOptions:GridOptions;
    
    searchInput1: FormControl;
    weather: WeatherResult;

    //myData:weatherRow; // = weather.wdata[0];

    
    constructor(weatherService: WeatherService) {
        this.searchInput1 = new FormControl('');
        this.searchInput1.valueChanges
            .debounceTime(300)
            .switchMap((place: string) => weatherService.getWeather(place))
            .subscribe(
                (weather: WeatherResult) => this.weather = weather,
                error => console.error(error),
                () => console.log('Weather is retrieved'));

        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.rowData = this.createRowData(this.weather);
    }


    private createColumnDefs() {
        return [
            { headerName: 'Day', field: "day", width:85},
            { headerName: 'Temperature', field: "temperature", width:125},
            { headerName: 'Humidity', field: "humidity", width:80},
            { headerName: 'Pressure', field: "pressure", width:100},
            { headerName: 'Wind', field: "wind", width:80},
            { headerName: 'Precipitation', field: "precipitation", width:125},
            { headerName: 'Clouds', field: "clouds", width:100},
            { headerName: 'Min Temp', field: "min_temp", width:80},
            { headerName: 'Max Temp', field: "max_temp", width:80}
        ];
    }


    private createRowData(weather) {
        return [
            {"day":"09/30/2016", "temperature": 33, "humidity":99, "pressure":1000, "wind":15, "precipitation":33, "clouds":22, "min_temp":62, "max_temp":77},
            {"day":"09/31/2016", "temperature":54, "humidity":95, "pressure":1005, "wind":16, "precipitation":37, "clouds":20, "min_temp":58, "max_temp":72}
        ];
    }

//{"day":"Today", "temperature":this.weather.temperature, "humidity":this.weather.humidity, "pressure":this.weather.pressure,
//    "wind":this.weather.wind, "precipitation":this.weather.precip, "clouds":this.weather.clouds,
//    "min_temp":this.weather.temp_min, "max_temp":this.weather.temp_max
//}

}


