import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  studentsData = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.studentsService.getJSON().subscribe((data) => {
      this.studentsData = data;
    });
  }

  update() {
    this.studentsData = this.studentsService.getStudents();
  }
}
