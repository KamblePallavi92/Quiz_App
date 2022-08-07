import { Component, OnInit } from '@angular/core';
import { FeedbackForm } from './feedback_form';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model = new FeedbackForm();

  // onSubmit(){
  //   console.log(this.model);
  // }

  onSubmit(feedbackForm:NgForm){
    console.log(feedbackForm.value);
    feedbackForm.reset();
  }
}
