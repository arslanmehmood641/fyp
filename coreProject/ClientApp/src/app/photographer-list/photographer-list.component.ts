import { MediaService } from "./../Services/media.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-photographer-list",
  templateUrl: "./photographer-list.component.html",
  styleUrls: ["./photographer-list.component.css"]
})
export class PhotographerListComponent implements OnInit {
  medium;
  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.mediaService.getMeduim().subscribe(res => {
      this.medium = res;
      console.log(this.medium);
    });
  }
}
