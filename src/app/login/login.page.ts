import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string = "";
  public password: string = "";

  constructor(private router: Router, public fireService: FireserviceService) { }

  ngOnInit() {
  }

  moveToSignup () {
    this.router.navigate(['/signup']);
  }

  login () {
    this.fireService.loginWithEmail({email: this.email, password: this.password}).then(res => {
      if (res.user === null) throw new Error;
      if (res.user.uid) {
        this.fireService.getDetails({uid: res.user.uid}).subscribe(res => {
          console.log(res);
        });
      }
    }), (err: { message: string; }) => {
      alert(err.message);
      console.log(err);
    }
  }
}
