import { StudentsService } from './../students.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  @Output() parentFun: EventEmitter<any> = new EventEmitter();

  datas = [];
  lastRoll: number;
  newStudent: Object;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}

  form = new FormGroup({
    studentName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    ]),
    studentCity: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    ]),
    studentCollege: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    ]),
    qualification: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    ]),
  });

  get studentName() {
    return this.form.get('studentName');
  }

  get studentCity() {
    return this.form.get('studentCity');
  }

  get studentCollege() {
    return this.form.get('studentCollege');
  }

  get qualification() {
    return this.form.get('qualification');
  }

  createNew() {
    this.datas = this.studentsService.getStudents();

    if (this.datas.length > 0) {
      this.lastRoll = this.datas[this.datas.length - 1].roll;
    } else {
      this.lastRoll = 0;
    }

    this.newStudent = {
      roll: ++this.lastRoll,
      name: this.studentName.value,
      city: this.studentCity.value,
      college: this.studentCollege.value,
      qualification: this.qualification.value,
    };

    this.studentsService.addStudent(this.newStudent);
    this.parentFun.emit();

    this.form.reset();
  }

  submit(form) {
    console.log('Successfully Submitted: ', form);
    this.createNew();
  }
}
