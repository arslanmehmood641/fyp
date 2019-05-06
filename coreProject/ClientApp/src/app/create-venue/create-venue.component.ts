import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-venue",
  templateUrl: "./create-venue.component.html",
  styleUrls: ["./create-venue.component.css"]
})
export class CreateVenueComponent implements OnInit {
  HallForm: FormGroup;
  formData;
  id;
  constructor(private hall: HallsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.HallForm = this.formBuilder.group({
      Name: "",
      Email: "",
      StreetNo: 0,
      HouseNo: 0,
      TownName: "",
      City: "",
      Country: "",
      PricePerHead: 0,
      BCapacity: 0,
      PCapacity: 0,
      Wifi: "",
      Dj: "",
      BMackup: "",
      ChickenMain: "",
      ChickenRice: "",
      ChickenSweet: "",
      ChickenStarter: "",
      MuttonMain: "",
      MuttonRice: "",
      MuttonSweet: "",
      MuttonStarter: "",
      BeefMain: "",
      BeefRice: "",
      BeefSweet: "",
      BeefStarter: "",
      ChickenPrice: 0,
      MuttonPrice: 0,
      BeefPrice: 0
    });
    this.id = sessionStorage.getItem("id");
  }
  RegisterHall() {
    this.formData = this.HallForm.value;
    this.formData.UId = this.id;
    this.hall.PuttHall(this.formData).subscribe(res=>{
      console.log(res);
    })
  }
}
