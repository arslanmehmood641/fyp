import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Router } from "@angular/router";
@Injectable()
export class MediaService {
  id;
  constructor(private http: Http) {}
  getMeduim() {
    return this.http.get("/api/media").map(res => res.json());
  }
  getMedia(companyId: Number) {
    this.id = companyId;
    console.log(this.id);
    return this.http
      .get("/api/OneMedia/" + this.id)
      .map((response: Response) => response.json());
  }
  PutBookingMedia(booking) {
    return this.http.post("/api/Mediabooking", booking).map(res => res.json);
  }
  PutMedia(caterer) {
    return this.http.post("/api/Registermedia", caterer);
  }
}
