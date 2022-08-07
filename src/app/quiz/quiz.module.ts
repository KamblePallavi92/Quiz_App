import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { ChangeBgDirective } from './change-bg.directive';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    QuizComponent,
    ResultComponent,
    ChangeBgDirective
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
