import { StudentsService } from './students.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TableComponent } from './table/table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    CalculatorComponent,
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
