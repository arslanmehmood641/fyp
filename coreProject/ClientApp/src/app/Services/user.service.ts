import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {
  constructor(private http: Http) {}
  GetUser(logData) {
    // return this.http.post('/api/login',{name,password}).subscribe(data=>{console.log(data,"data")})
    console.log(logData);
    return this.http.post("api/login", logData).map(res => res.json());
  }
  SubmitUser(check) {
    // return this.http.post('/api/login',{name,password}).subscribe(data=>{console.log(data,"data")})
    //console.log(check);
    return this.http.post("api/signup", check).map(res => res.json());
  }
  GetUserByid(uid){
    return this.http.get("api/getuserbyid/"+uid).map((response:Response)=>response.json())
  }
}
