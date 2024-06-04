import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: string = "";
  public password: string = "";
  alertButtons = ['Action'];

  constructor(private router: Router, public fireService: FireserviceService) { }

  ngOnInit() {
  }

  moveToLogin () {
    this.router.navigate(['/login']);
  }

  signup () {
    this.fireService.signup({email: this.email, password: this.password}).then(res => {
      if (res.user === null) throw new Error;
      if (res.user.uid) {
        const data = {
          email: this.email,
          password: this.password,
          uid: res.user.uid
        }

        this.fireService.saveDetails(data).then(res => {
          console.log(res);
        }, err => {
          console.log(err.message);
        });
      }
    }, err => {
      console.log(err.message);
    });
  }
}
