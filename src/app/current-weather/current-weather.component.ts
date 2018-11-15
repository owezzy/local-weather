import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../intefaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Nairobi',
      country: 'Kenya ',
      date: new Date(),
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit() {}
}
