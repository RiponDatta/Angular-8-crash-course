import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AboutComponent,
    DepartmentDetailComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
