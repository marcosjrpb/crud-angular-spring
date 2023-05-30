import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],

})
export class AppMaterialModule { }
