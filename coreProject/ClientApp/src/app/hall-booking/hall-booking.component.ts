import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HallsService } from "../Services/halls.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-hall-booking",
  templateUrl: "./hall-booking.component.html",
  styleUrls: ["./hall-booking.component.css"]
})
export class HallBookingComponent implements OnInit {
  Rid;
  data;
  bookingData;
  constructor(
    private hall: HallsService,
    private router: Router,
    private http: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.params.subscribe(routeParams => {
      this.CheckRedirection(routeParams.id);
    });
  }

  CheckRedirection(id) {
    this.Rid = id;
    this.data = sessionStorage.getItem("id");
    console.log("pageId", this.Rid);
    console.log("useridhallbooking", this.data);
    if (this.Rid == 1) {
      this.hall.getPendingBookings(this.data).subscribe(res => {
        this.bookingData = res;
      });
    } else if (this.Rid == 2) {
     
      this.hall.getApprovedBookings(this.data).subscribe(res => {
        this.bookingData = res;
      });
    } else if (this.Rid == 3) {
      this.hall.getCompletedBookings(this.data).subscribe(res => {
        this.bookingData = res;
      });
    }
  }
}
