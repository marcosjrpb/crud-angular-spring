import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { CoursesService } from '../services/courses.service';




@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],

})
export class CourseFormComponent implements OnInit{

 form: FormGroup;

constructor(private formBuilder: FormBuilder,
   private service: CoursesService,
   private snackBar: MatSnackBar){

  this.form = this.formBuilder.group({
  name:[null],
  category:[null]
});

}

ngOnInit(): void {
}

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: result => console.log(result),
        error: error => this.snackBar.open("Erro ao Salvar Curso"),
      });
  }

 




onCancel(){

}

}

