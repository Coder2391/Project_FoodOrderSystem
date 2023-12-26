import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {

  constructor(private service: CheckoutService, private router: Router){}

  collection: any
  
  ngOnInit(): void {
    this.service.getdata().subscribe((result)=>{
      this.collection = result
  })
  }
}
