import { CatererService } from "./../Services/caterer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caterer-list",
  templateUrl: "./caterer-list.component.html",
  styleUrls: ["./caterer-list.component.css"]
})
export class CatererListComponent implements OnInit {
  caterers;
  constructor(private catererService: CatererService) {}

  ngOnInit() {
    this.catererService.getCaterers().subscribe(res => {
      this.caterers = res;
      console.log(this.caterers);
    });
  }
}
