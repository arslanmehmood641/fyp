import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CatererService } from "../Services/caterer.service";

@Component({
  selector: "app-caterer-detail",
  templateUrl: "./caterer-detail.component.html",
  styleUrls: ["./caterer-detail.component.css"]
})
export class CatererDetailComponent implements OnInit {
  catererData;
  cid;
  BookingForm: any;
  help: any;
  data: any;

  constructor(
    private catererService: CatererService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.cid = this.router.snapshot.params["id"];
    this.data = sessionStorage.getItem("id");
    this.catererService.getCaterer(this.cid).subscribe(res => {
      this.catererData = res;
      console.log(res);
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
    this.help.CompanyId = this.cid;
    this.help.UId = this.data;
    this.catererService.PutBookingCaterer(this.help).subscribe(res => {});
  }
}
