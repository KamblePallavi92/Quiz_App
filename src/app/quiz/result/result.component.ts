import { Component, OnInit } from '@angular/core';
import { QuestionsInterface } from 'src/app/shared/questions';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
  public quizService:QuizService) { }

  questions!:QuestionsInterface[]
  ngOnInit(): void {
    //console.log('Service Qns array'+this.quizService.qns);
    //this.questions = this.quizService.qns;
    // Object.keys(this.quizService.qns).map((key)=>{
    //   //this.questions.push({[key]:this.quizService.qns[key]})
    //   //return this.questions;
    //   console.log(key);

    //  })
    // console.log(this.questions);
    // console.log(typeof(this.questions));
    // console.log(this.quizService.qns);
    // console.log(typeof(this.quizService.qns));
    this.quizService.getQuestions(this.quizService.topicId).subscribe(
      data =>{
        this.quizService.qns.forEach((e,i)=>{
          if(e.answer == data!.Questions[i].answer)
          {
            this.quizService.correctAnswerCount++;
            //e.correct = data!.Questions[i].answer;
          }
        });
        this.quizService.totalWrongAnswered = this.quizService.qns.length - this.quizService.correctAnswerCount;
        this.quizService.totalScore = this.quizService.correctAnswerCount;
        this.quizService.qns_bkp = data!.Questions;
      }
    )
  }

  counter(i:number){
    return new Array(i);
  }

}
