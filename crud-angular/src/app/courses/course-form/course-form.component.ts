import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Location } from '@angular/common';





@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],

})
export class CourseFormComponent implements OnInit{

 form: FormGroup;

constructor(private formBuilder: FormBuilder,
   private service: CoursesService,
   private snackBar: MatSnackBar,
   private location: Location){

  this.form = this.formBuilder.group({
  name:[null],
  category:[null]
});

}

ngOnInit(): void {}

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

