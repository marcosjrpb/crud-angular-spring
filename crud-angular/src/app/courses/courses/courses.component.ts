import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from './../model/course';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses$: Observable<Course[]>;

  displayedColumns = ['_id','name','category'];

  //coursesService: CoursesService;


  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog

    ){



    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carrregar Curso');
        return of([])
      })
      );

   // this.coursesService = new CoursesService();

  }


  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
data: errorMsg

    });


  }
  ngOnInit(): void {
  }

}
