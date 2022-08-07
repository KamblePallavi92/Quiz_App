import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from '../auth.guard';

const routes:Routes = [
  {path:"quizzes/:topicId",component:QuizComponent,canActivate:[AuthGuard]},
  {path:"result",component:ResultComponent,canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizRoutingModule { }
