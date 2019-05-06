import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { UserService } from "./../Services/user.service";
import { HomeComponent } from "./../home/home.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  isInValid;
  Submitted: boolean;
  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required]]
    });
  }
  get f() {
    return this.LoginForm.controls;
  }

  loginUser() {
    this.Submitted = true;
    if (this.LoginForm.invalid) {
      return;
    } else {
      this.user.GetUser(this.LoginForm.value).subscribe(res => {
        if (res == null) {
          this.isInValid = true;
        }
        else{
          sessionStorage.setItem("id", res.uId);
          console.log("check", res.uId);
          if (res.uType == 1) {
            this.isInValid = false;
            this.router.navigate(["/admin"]);
          } else if (res.uType == 2) {
            this.isInValid = false;
            this.router.navigate(["/home"]);
          }
        }
       
      });
    }
  }
}
