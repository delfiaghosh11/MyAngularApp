import { CalculatorComponent } from './calculator/calculator.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableComponent } from './table/table.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '',   redirectTo: '/table', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
