import { HallsService } from "./../Services/halls.service";
import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-venue-list-admin",
  templateUrl: "./venue-list-admin.component.html",
  styleUrls: ["./venue-list-admin.component.css"]
})
export class VenueListAdminComponent implements OnInit {
  id;
  AllData;
  constructor(private http: Http, private hall: HallsService) {}
  ngOnInit() {
    this.id=sessionStorage.getItem("id")
    this.hall.getHallAdmin(this.id).subscribe(res => {
      this.AllData = res;
      console.log(this.AllData);
    });
  }
}
