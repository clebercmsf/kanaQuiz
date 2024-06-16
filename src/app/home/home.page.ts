import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit() {
    this.authenticate();
  }

  moveToLearning () {
    this.router.navigate(['/learning']);
  }

  moveToPraticle () {
    this.router.navigate(['/praticle']);
  }

  moveToLogin () {
    this.router.navigate(['/login']);
  }

  authenticate () {
    const isAuthenticate = localStorage.getItem("kanaQuiz-usr");
    isAuthenticate ? null : this.moveToLogin();
  }
}
