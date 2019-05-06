import { MediaService } from "./../Services/media.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-create-media",
  templateUrl: "./create-media.component.html",
  styleUrls: ["./create-media.component.css"]
})
export class CreateMediaComponent implements OnInit {
  MediaForm: FormGroup;
  formData;
  id;
  constructor(
    private mediaService: MediaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.MediaForm = this.formBuilder.group({
      Name: "",
      Email: "",
      StreetNo: 0,
      HouseNo: 0,
      TownName: "",
      City: "",
      Country: "",
      DroneCamera: 0,
      HdCam: 0,
      NoOfCams: "",
      Albums: 0,
      PhotoGraphy: 0,
      FilmGraphy: 0,
      CamsOne: 0,
      PriceOne: 0,
      DroneOne: 0,
      AlbumOne: 0,
      CamsTwo: 0,
      PriceTwo: 0,
      DroneTwo: 0,
      AlbumTwo: 0,
      CamsThree: 0,
      PriceThree: 0,
      DroneThree: 0,
      AlbumThree: 0
    });
    this.id = sessionStorage.getItem("id");
  }
  RegisterMedia() {
    this.formData = this.MediaForm.value;
    this.formData.UId = this.id;
    this.mediaService.PutMedia(this.formData).subscribe(res => {
      console.log(res);
    });
  }
}
