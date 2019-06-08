import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatExpansionModule} from '@angular/material';
import { UserPageComponent } from './components/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
