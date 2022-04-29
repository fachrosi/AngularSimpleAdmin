import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table/mat-table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

const routes: Routes = [
  {
    path      : 'mat',
    component : MatTableComponent
  },{
    path      : 'custom',
    component : CustomTableComponent
  },
]

@NgModule({
  declarations: [
    MatTableComponent,
    CustomTableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TablesModule { }
