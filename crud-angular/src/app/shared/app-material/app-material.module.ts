import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule

  ],

})
export class AppMaterialModule { }
