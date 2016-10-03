/**
 * Created by okonovalov on 5/24/2016.
 */

export class weatherRow {
    public day:string;
    public temperature: number; //string;
    public humidity:  number; //string;
    public pressure:  number; //string;
    public temp_min:  number; //string;
    public temp_max:  number; //string;
    public wind:  number; //string;
    public precip: string;
    public clouds:  number; //string;


    constructor(day, temperature, humidity, pressure, temp_min, temp_max, wind, precip, clouds) {
        this.day = day;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.wind = wind;
        this.precip = precip;
        this.clouds = clouds;
    }

}
