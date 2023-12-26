import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
  newuser = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    review: new FormControl('')
  })
  constructor(private services:FeedbackService){
  }
  ngOnInit(): void { 
  }
  senddata(){
    return this.services.submitdata(this.newuser.value).subscribe((result)=>{
      // alert ('result')
      console.log(result)
    })
  }
}
