import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WeatherModule } from './weather/weather.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import{ HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    WeatherModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
