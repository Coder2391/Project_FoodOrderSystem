import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/posts"

  submitdata(data:any){
    alert(data)
    return this.http.post(this.url, data);
  }
}


  // getdata(){
  //   return this.http.get(this.url)
  //   // return this.myservice.get(this.url1)
  // }