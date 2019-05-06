import { ActivatedRoute } from "@angular/router";
import { HallsService } from "./../Services/halls.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-packege-detail",
  templateUrl: "./packege-detail.component.html",
  styleUrls: ["./packege-detail.component.css"]
})
export class PackegeDetailComponent implements OnInit {
  bid;
  packeDetail;
  data: string;
  constructor(
    private hallService: HallsService,
    private http: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.params.subscribe(routerP => {
      this.bid = routerP.id;
    });
    this.data = sessionStorage.getItem("id");
    console.log(this.data);
    this.getDetail(this.data, this.bid);
  }
  getDetail(uid, bid) {
    var c = { id1: 0, id2: 0 };
    c.id1 = bid;
    c.id2 = uid;
    this.hallService.getPackegeDetail(c).subscribe(res => {
      this.packeDetail = res;
      console.log(this.packeDetail);
    });
  }
}
