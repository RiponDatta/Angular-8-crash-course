import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "departments", component: DepartmentComponent },
  { path: "departments/:id", component: DepartmentDetailComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
