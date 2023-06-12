import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],

})
export class CourseFormComponent implements OnInit{

 form = this.formBuilder.group({
  name: [''],
  category:['']
});

constructor(private formBuilder:  NonNullableFormBuilder,
   private service: CoursesService,
   private snackBar: MatSnackBar,
   private location: Location,
   private route: ActivatedRoute){

}

ngOnInit(): void {
   const course: Course = this.route.snapshot.data['course'];
   console.log(course);

}

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: result => this.onSuccess(),
        error: error => this.snackBar.open("Erro ao Salvar Curso",'',{duration:5000})
      });
  }

  onSuccess(){
      this.snackBar.open('Curso Salvo com Sucesso!','',{duration:5000});
      this.onCancel();
  }

    onCancel(){
    this.location.back();
    }

}

