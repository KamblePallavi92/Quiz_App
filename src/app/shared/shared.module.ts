import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
//import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers:[
    QuizService
  ],
  exports:[

  ]
})
export class SharedModule { }
