import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsInterface, TopicsInterface } from '../shared/questions';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(
    public quizService:QuizService,
    private route:ActivatedRoute,
    private router:Router
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) =>{
        this.quizService.topicId = +this.route.snapshot.paramMap.get('topicId')!;

        this.quizService.getQuestions(this.quizService.topicId).subscribe(
          data => {
            this.quizService.seconds = 600;
            this.quizService.qnProgress = 0;
            //this.quizService.qns_bkp = data!.Questions;
            this.quizService.qns = data!.Questions;
            this.quizService.topic = data!.topicName;
            this.quizService.topicId = data!.topicId;
            this.quizService.correctAnswerCount=0;
            this.quizService.totalQuestionAttempted=0;
            this.quizService.totalWrongAnswered=0;
            this.quizService.totalScore=0
            this.startTimer();
          }
        );
      }
    )
  }

  startTimer(){
    this.quizService.timer = setInterval(()=>{
      this.quizService.seconds--;
    },1000)
  }

  displayTimeGiven(){
    return Math.floor(this.quizService.seconds/60)+':'+Math.floor(this.quizService.seconds%60)
  }

  Answer(qID:number,choice:number){
    this.quizService.qns![this.quizService.qnProgress].answer = choice;
    // setTimeout(()=>{
    //   this.quizService.qnProgress++;
    //   //if(this.quizService.qnProgress == 10)
    //   if(this.quizService.qnProgress == this.quizService.qns.length-1)
    //   {
    //     clearInterval(this.quizService.timer);
    //     this.router.navigate(['/result']);
    //   }
    // },1000)
    this.quizService.qnProgress++;
    this.quizService.totalQuestionAttempted++;
    //if(this.quizService.qnProgress == 10)
    if(this.quizService.qnProgress == this.quizService.qns.length)
    {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

  nextQn(){
    if(this.quizService.qnProgress <= this.quizService.qns.length)
    {
      this.quizService.qnProgress++;
    }
    if(this.quizService.qnProgress == this.quizService.qns.length)
    {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }
  previousQn(){
    this.quizService.qnProgress--;
  }

  resetQuiz(){
    this.quizService.seconds=600;
    this.quizService.timer=0;
    this.quizService.qnProgress=0;
    this.quizService.correctAnswerCount=0;
    this.displayTimeGiven();
    this.startTimer()
  }
}
