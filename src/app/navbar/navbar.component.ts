import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicsInterface } from '../shared/questions';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public quizService:QuizService,
    private router:Router
  ) { }

  topics:TopicsInterface[]=[]


  ngOnInit(): void {
    localStorage.clear();
    this.quizService.getTopics().subscribe(
      data => {
        this.topics = data;
      }
    )
    //console.log(localStorage.getItem('name'));

    // if(localStorage.getItem('name')!=null)
    // {
    //   this.quizService.isRegistered.next(true);
    // }
  }
  signOut(){
    localStorage.clear();
    this.quizService.isRegistered.next(false);
    this.router.navigate(['/register']);
  }

}
