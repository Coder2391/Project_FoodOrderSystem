import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router){
  }
  ngOnInit(): void {
  }
  homepage(){
    this.router.navigateByUrl('/home-page');
  }
  about(){
    this.router.navigateByUrl('/about-page');
  }
  feedbackPage(){
    this.router.navigateByUrl('/feedback-page');
  }
  cartpage(){
    this.router.navigateByUrl('/cart-page');
  }
}
