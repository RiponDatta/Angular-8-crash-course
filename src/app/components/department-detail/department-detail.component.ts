import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { IDepartment } from 'src/app/models/department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  private id;
  private department: IDepartment;
  private errorMsg: string;

  constructor(private route: ActivatedRoute, private deptService: DepartmentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.deptService.getDepartments()
        .subscribe(
          data => {
            this.department = data.filter(x => x.id == this.id)[0];
          },
          error => {
            this.errorMsg = error.message;
          }
        );
  }
}
