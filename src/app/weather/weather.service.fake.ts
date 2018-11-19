import { Observable, of } from 'rxjs'
import { ICurrentWeather } from '../intefaces'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Kisumu',
    country: 'KE',
    date: 14895789600,
    image: '',
    temperature: 280.32,
    description: 'light intesity drizzle',
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
