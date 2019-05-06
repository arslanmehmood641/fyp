import { UserService } from "./../Services/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "../Services/alert.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  SignupForm: FormGroup;
  wrong;
  submitted: boolean;
  constructor(
    private user: UserService,
    private formbuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.SignupForm = this.formbuilder.group({
      UserName: ["", [Validators.required, Validators.email]],
      Password: new FormControl("", Validators.required),
      UType: new FormControl("", Validators.required)
    });
  }
  get f() {
    return this.SignupForm.controls;
  }
  PutUser() {
    this.submitted = true;

    if (this.SignupForm.invalid) {
      return;
    } else {
      console.log(this.SignupForm.value);
      this.user.SubmitUser(this.SignupForm.value).subscribe(res => {
        if (res) {
          this.router.navigate([""]);
        }
      });
    }
  }
}
