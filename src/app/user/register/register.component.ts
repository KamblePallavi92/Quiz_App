import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private quizService:QuizService
  ) { }

  ngOnInit(): void {
  }

  regForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  get name():FormControl{
    return this.regForm.get('name') as FormControl;
  }

  get email():FormControl{
    return this.regForm.get('email') as FormControl;
  }

  submitData()
  {
    localStorage.clear();
    localStorage.setItem('name',this.regForm.value.name!);
    localStorage.setItem('email',this.regForm.value.email!);
    if(localStorage.getItem('name')!=null)
    {
      this.quizService.isRegistered.next(true);
      this.quizService.userName = localStorage.getItem('name')!;
      this.router.navigate(['/home'])
    }
    else
    {
      this.quizService.isRegistered.next(false);
    }
  }
}
