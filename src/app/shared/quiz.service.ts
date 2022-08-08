import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { QuestionsInterface, TopicsInterface } from "./questions";

@Injectable({
  providedIn:"root"
})
export class QuizService{

  constructor(
    private http:HttpClient
  ){}
  //-----------------Properties-------------------------
  // readonly rootUrl =  "http://localhost:4200/assets/questions.json"
  readonly rootUrl =  "assets/questions.json"
  userName!:string
  qns!:QuestionsInterface[]
  qns_bkp!:QuestionsInterface[]
  seconds!:number;
  timer:any;
  qnProgress!:number;
  topic!:string;
  topicId!:number;
  topicId$!:BehaviorSubject<number>;
  correctAnswerCount!:number;
  totalQuestionAttempted!:number;
  totalWrongAnswered!:number;
  totalScore!:number;
  isRegistered = new BehaviorSubject<Boolean>(false)

  getTopics():Observable<TopicsInterface[]>
  {
    return this.http.get<TopicsInterface[]>(this.rootUrl);
  }

  getQuestions(topicId:number):Observable<TopicsInterface|undefined>{
    return this.http.get<TopicsInterface[]>(this.rootUrl)
    .pipe(
      map(
        topics =>
        {return topics.find(topic=>topic.topicId==topicId)}
      )
    )
  }
}
