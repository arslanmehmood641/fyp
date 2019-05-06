import { MediaService } from "./../Services/media.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-photographer",
  templateUrl: "./photographer.component.html",
  styleUrls: ["./photographer.component.css"]
})
export class PhotographerComponent implements OnInit {
  id;
  BookingForm: FormGroup;
  help;
  data;
  mediaData: any;
  constructor(
    private route: ActivatedRoute,
    private mediaSerivce: MediaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.data = sessionStorage.getItem("id");
    if (this.route.snapshot.params["id"]) {
      this.id = this.route.snapshot.params["id"];
    }
    this.mediaSerivce.getMedia(this.id).subscribe(res => {
      this.mediaData = res;
      console.log(this.mediaData);
    });
    this.BookingForm = this.formBuilder.group({
      PrefferedTime: "",
      NoOfDays: 0,
      EventDate: "",
      UserName: "",
      UserEmail: "",
      Phone: "",
      City: "",
      Packege: 0
    });
  }
  BookHall() {
    this.help = this.BookingForm.value;
    this.help.CompanyId = this.id;
    this.help.UId = this.data;
    this.mediaSerivce.PutBookingMedia(this.help).subscribe(res => {});
  }
}
