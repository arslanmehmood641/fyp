import { ActivatedRoute } from "@angular/router";
import { UserService } from "./../Services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id;
  user;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = sessionStorage.getItem("id");
    console.log("profileId", this.id);
    this.userService.GetUserByid(this.id).subscribe(res => {
      this.user = res;
      console.log("profile", res);
    });
  }
}
