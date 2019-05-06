import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Http } from "@angular/http";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-venue-detail",
  templateUrl: "./venue-detail.component.html",
  styleUrls: ["./venue-detail.component.css"]
})
export class VenueDetailComponent implements OnInit {
  id;
  hallData;
  BookingForm: FormGroup;
  help;
  data;
  submitted: boolean;
  constructor(
    private route: ActivatedRoute,
    private hall: HallsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.data = sessionStorage.getItem("id");
    if (this.route.snapshot.params["companyId"]) {
      this.id = this.route.snapshot.params["companyId"];
    }
    this.hall.getHall(this.id).subscribe(res => {
      this.hallData = res;
      console.log(this.hallData);
    });
    this.BookingForm = this.formBuilder.group({
      PrefferedTime: ["", [Validators.required]],
      NoOfGuests: [0, [Validators.required]],
      EventDate: ["", [Validators.required]],
      UserName: ["", [Validators.required]],
      UserEmail: ["", [Validators.required, Validators.email]],
      Phone: ["", [Validators.required]],
      City: ["", [Validators.required]],
      Packege: [0, [Validators.required]]
    });
  }
  get f() {
    return this.BookingForm.controls;
  }
  BookHall() {
    this.submitted = true;

    if (this.BookingForm.invalid) {
      return;
    } else {
      this.help = this.BookingForm.value;
      this.help.CompanyId = this.id;
      this.help.UId = this.data;
      this.hall.PutBooking(this.help).subscribe(res => {
        if (res) {
          this.router.navigate([""]);
        }
      });
    }
  }
}
