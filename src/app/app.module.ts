import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test7Component } from './components/test7/test7.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [		
    AppComponent,
    Test2Component,
    HomeComponent,
    Test3Component,  
    Test7Component,    
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
