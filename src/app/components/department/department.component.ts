import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { IDepartment } from 'src/app/models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  private departments: IDepartment[];
  private errorMsg: string;

  constructor(private deptService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.deptService.getDepartments()
        .subscribe(
          data => {
            this.departments = data;
          },
          error => {
            this.errorMsg = error.message;
          }
          );
  }

  public displayDetail(dept: IDepartment) {
    this.router.navigate(['/departments/' + dept.id]);
  }
}
