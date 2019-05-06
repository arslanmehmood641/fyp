import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
@Injectable()
export class HallsService {
  companyId: Number;
  snapshot: any;
  constructor(private http: Http) {}
  getHalls() {
    return this.http.get("/api/halls").map(res => res.json());
  }
  getPendingBookings(id: Number) {
    console.log(id);
    return this.http
      .get("/api/pendingbookings/" + id)
      .map((response: Response) => response.json());
  }
  getApprovedBookings(id: Number) {
    return this.http.get("/api/approvedbookings/" + id).map((response: Response) => response.json());
  }
  getCompletedBookings(id: Number) {
    return this.http.get("/api/completedbookings/" + id).map((response: Response) => response.json());
  }
  getPendingBookingsOwner(id: Number) {
    console.log(id);
    return this.http
      .get("/api/pendingbookingsowner/" + id)
      .map((response: Response) => response.json());
  }
  getApprovedBookingsOwner(id: Number) {
    return this.http.get("/api/approvedbookingsowner/" + id).map((response: Response) => response.json());
  }
  getCompletedBookingsOwner(id: Number) {
    return this.http.get("/api/completedbookingsowner/" + id).map((response: Response) => response.json());
  }
  ApprovedBooking(check) {
    return this.http.post("/api/approvedbooking" ,check).map(res => res.json);
  }
  DoneBooking(check) {
    return this.http.post("/api/markcompleted" ,check).map(res => res.json);
  }
  DisApprovedBooking(id: Number) {
    return this.http.get("/api/disapprovedbooking/" + id).map(res => res.json);
  }
  getHall(companyId: Number) {
    this.companyId = companyId;
    console.log(this.companyId);
    return this.http
      .get("/api/Onehall/" + this.companyId)
      .map((response: Response) => response.json());
  }
  getHallAdmin(companyId: Number) {
    this.companyId = companyId;
    console.log(this.companyId);
    return this.http
      .get("/api/Allvenues/" + this.companyId)
      .map((response: Response) => response.json());
  }
  getPackegeDetail(c) {
    return this.http.post("/api/packegedetail",c ).map((response: Response) => response.json());
  }
  PutBooking(booking) {
    return this.http.post("/api/Hallbooking", booking).map(res => res.json);
  }
  PuttHall(hall)
  {
    return this.http.post("/api/Hallregister",hall).map(res => res.json);
  }
}
