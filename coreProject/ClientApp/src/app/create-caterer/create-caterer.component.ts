import { CatererService } from "./../Services/caterer.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-caterer",
  templateUrl: "./create-caterer.component.html",
  styleUrls: ["./create-caterer.component.css"]
})
export class CreateCatererComponent implements OnInit {
  CatererForm: FormGroup;
  formData;
  id;
  constructor(
    private catererService: CatererService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.CatererForm = this.formBuilder.group({
      Name: "",
      Email: "",
      StreetNo: 0,
      HouseNo: 0,
      TownName: "",
      City: "",
      Country: "",
      Tent: 0,
      Generator: 0,
      Heater: 0,
      ServingStaff: 0,
      Lights: 0,
      StageDecorations: 0,
      Cooking: 0,
      BridalRoom: 0,
      AirCondition: 0,
      ValetParking: 0,
      Wifi: 0,
      Dj: 0,
      Decoration: 0
    });
    this.id = sessionStorage.getItem("id");
  }
  RegisterCaterer() {
    console.log("hee");
    this.formData = this.CatererForm.value;
    this.formData.UId = this.id;
    this.catererService.RegisterCaterer1(this.formData).subscribe(res => {
      console.log(res);
    });
  }
}
