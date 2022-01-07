import { HomeComponent } from './components/home/home.component';


import { Test3Component } from './components/test3/test3.component';
import { Test7Component } from './components/test7/test7.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Test2Component } from './components/test2/test2.component';
const routes: Routes = [
  
  
  
  { path:'kaydol' , component: Test2Component },
  { path:'ygiriş' , component: Test3Component },
  { path:'kgiriş' , component: Test7Component },
  { path:'' , component: HomeComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    
  ]
})
export class AppRoutingModule { }
