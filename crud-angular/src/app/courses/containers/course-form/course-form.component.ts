import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],

})
export class CourseFormComponent implements OnInit{

 form = this.formBuilder.group({
  _id: [''],
  name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
  category:['',Validators.required]
});

constructor(private formBuilder:  NonNullableFormBuilder,
   private service: CoursesService,
   private snackBar: MatSnackBar,
   private location: Location,
   private route: ActivatedRoute){

}

ngOnInit(): void {
   const course: Course = this.route.snapshot.data['course'];
   this.form.setValue({
    _id: course._id,
    name: course.name,
    category: course.category
});


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

    getErrorMessage(fieldName: string) {
      const field = this.form.get(fieldName);

      if (field?.hasError('required')) {
        return 'Campo Obrigatório';
      }
      if (field?.hasError('minlength')) {
        const requiredLength = field.errors ?
         field.errors['minlength']['requiredLength']:5;
        return `Tamanho Minimo precisa ser  de ${requiredLength} caracteres`;
      }
      if (field?.hasError('maxlength')) {
        const requiredLength = field.errors ?
          field.errors['maxlength']['requiredLength'] : 5;
        return `Tamanho Máximo precisa ser de ${requiredLength} caracteres`;
      }



      return 'Campo Inválido!';
    }



}

