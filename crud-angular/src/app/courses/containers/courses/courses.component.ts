import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';





@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

   courses$: Observable<Course[]> | null = null;

   displayedColumns = ['name','category','actions'];

  //coursesService: CoursesService;


  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router : Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){

    this.refresh();
  }

  refresh(){

    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carrregar Curso');
        return of([])
      })
      );

  }


  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
       data: errorMsg

    });


  }
  ngOnInit(): void { }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });

  }
  onDelete(course: Course){
    this.coursesService.delete(course._id).subscribe(
   () =>{
      this.refresh();
    this.snackBar.open('Curso apagado com Sucesso','X',{
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition:'center'
    });
  },
    () => this.onError("Erro ao tentar mover Curso!")
    )
  }

}
