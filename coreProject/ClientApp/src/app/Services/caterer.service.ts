import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class CatererService {
  constructor(private http: Http, private router: ActivatedRoute) {}
  getCaterers() {
    return this.http.get("/api/caterers").map(res => res.json());
  }
  getCaterer(cid) {
    return this.http
      .get("/api/caterer/" + cid)
      .map((response: Response) => response.json());
  }
  PutBookingCaterer(booking) {
    return this.http.post("/api/Catererbooking", booking);
  }
  RegisterCaterer1(caterer) {
    return this.http.post("/api/Registercaterer", caterer);
  }
}
