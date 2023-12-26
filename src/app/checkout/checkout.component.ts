import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  payment = new FormGroup({
    Card_Number: new FormControl(''),
    Card_CVV: new FormControl(''),
    Exp_Date: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl(''),
    Message: new FormControl('')
  })
  constructor(private services:CheckoutService, private router:Router){}
  ngOnInit(): void {   
  }
  senddata(){
    return this.services.submitdata(this.payment.value).subscribe((result)=>{
      // alert ('result')
      console.log(result)
    })
  }
  btnclk(){
    this.router.navigateByUrl('review-page');
  }
}
