import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CoursesRoutingModule,
    AppMaterialModule

  ]
})
export class CoursesModule { }
