import { MediaService } from "./../Services/media.service";
import { CatererService } from "./../Services/caterer.service";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";

import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  halls;
  medium: any;
  caterers: any;

  constructor(
    private hallsService: HallsService,
    private catererService: CatererService,
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    this.hallsService.getHalls().subscribe(halls => {
      this.halls = halls;
      console.log("halls", this.halls);
    });
    this.mediaService.getMeduim().subscribe(medium => {
      this.medium = medium;
      console.log("meduim", this.medium);
    });
    this.catererService.getCaterers().subscribe(caterers => {
      this.caterers = caterers;
      console.log("caterers", this.caterers);
    });
  }
}
