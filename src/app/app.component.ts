import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <span>{{ title }}</span>
      </mat-toolbar>
      <div class="content-margin">
        <div style="text-align:center">Your City's Forecast, right now</div>
        <div fx-layout="row">
          <div fxFlex></div>
          <div fxFlex="500px">
            <mat-card>
              <h2>Current Weather</h2>
              <app-current-weather></app-current-weather>
            </mat-card>
          </div>
          <div fxFlex></div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'owezzy-weather-app'
}
