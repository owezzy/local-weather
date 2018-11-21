import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <mat-toolbar color="primary">
        <span>{{ title }}</span>
      </mat-toolbar>
      <div>Your City's Forecast, right now</div>
      <h2>Current Weather</h2>
      <app-current-weather></app-current-weather>
    </div>
  `,
})
export class AppComponent {
  title = 'owezzy-weather-app'
}
