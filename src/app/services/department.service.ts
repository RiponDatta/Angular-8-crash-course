import { Injectable } from '@angular/core';
import { IDepartment } from '../models/department';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url: string = "/assets/data/department.json";

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url); 
  }
}
