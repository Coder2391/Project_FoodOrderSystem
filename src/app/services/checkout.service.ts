import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  url2="http://localhost:3000/Paydetails"

  submitdata(data:any){
    alert(data)
    return this.http.post(this.url2, data);
  }

  getdata(){
    return this.http.get(this.url2)
  }
}
