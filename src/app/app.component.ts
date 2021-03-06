import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <span>{{ title }}</span>
      </mat-toolbar>
      <div class="content-margin">
        <div fxLayoutAlign="center">
          <div class="mat-caption vertical-margin">Your City's Forecast, right now</div>
        </div>
        <div fxLayoutAlign="center"><app-city-search></app-city-search></div>
        <div fx-layout="row">
          <div fxFlex></div>
          <mat-card fxFlex="500px">
            <mat-card-header>
              <mat-card-title>
                <div class="mat-headline">Current Weather</div>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
          <div fxFlex></div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'owezzy-weather-app'
}
