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

  moveToHome () {
    this.router.navigate(['/']);
  }

  moveToSignup () {
    this.router.navigate(['/signup']);
  }

  login() {
    this.fireService.loginWithEmail({ email: this.email, password: this.password }).then(res => {
      if (res.user === null) {
        throw new Error("Usuário não encontrado");
      }
      if (res.user.uid) {
        this.fireService.getDetails({ uid: res.user.uid }).subscribe(res => {
          const data = {
            user: this.email,
            password: this.password
          }
          const dataString = JSON.stringify(data);
          localStorage.setItem("kanaQuiz-usr", dataString);
          this.email = "";
          this.password = "";
          alert("Login efetuado com sucesso!");
          this.moveToHome();
        }, err => {
          alert("Erro ao obter detalhes do usuário: " + err.message);
        });
      }
    }).catch(err => {
      alert("Erro ao efetuar login: " + err.message);
    });
  }
}
