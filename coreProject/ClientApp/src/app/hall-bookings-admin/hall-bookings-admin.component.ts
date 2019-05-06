import { Component, OnInit } from "@angular/core";
import { HallsService } from "../Services/halls.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hall-bookings-admin",
  templateUrl: "./hall-bookings-admin.component.html",
  styleUrls: ["./hall-bookings-admin.component.css"]
})
export class HallBookingsAdminComponent implements OnInit {
  Rid;
  data;
  bookingData;

  constructor(
    private hall: HallsService,
    private router: Router,
    private http: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.params.subscribe(routerParms => {
      this.Rid = routerParms.id;
      this.CheckRedirection(routerParms.id);
    });
  }
  CheckRedirection(id) {
    this.data = sessionStorage.getItem("id");
    console.log("pageId", this.Rid);
    console.log("useridhallbooking", this.data);
    if (this.Rid == 1) {
      this.hall.getPendingBookingsOwner(this.data).subscribe(res => {
        this.bookingData = res;
        console.log(this.bookingData);
      });
    } else if (this.Rid == 2) {
      this.hall.getApprovedBookingsOwner(this.data).subscribe(res => {
        this.bookingData = res;
        console.log(this.bookingData);
      });
    } else if (this.Rid == 3) {
      this.hall.getCompletedBookingsOwner(this.data).subscribe(res => {
        this.bookingData = res;
        console.log(this.bookingData);
      });
    }
  }
  MarkCompleted(cid, bid) {
    var b = Number(this.data);
    var c = { id1: 0, id2: 0 };
    c.id1 = bid;
    c.id2 = cid;
    console.log(c);
    this.hall.DoneBooking(c).subscribe(res => {
      console.log("approved data", res);
    });
  }
  ApprovedBooking(cid, bid) {
    var b = Number(this.data);
    var c = { id1: 0, id2: 0 };
    c.id1 = bid;
    c.id2 = cid;
    console.log(c);
    this.hall.ApprovedBooking(c).subscribe(res => {
      console.log("approved data", res);
    });
  }
  DisApprovedBooking() {}
}
class check {
  check() {
    (this.UId = 0), (this.Cid = 0);
  }
  UId: Number;
  Cid: number;
}
