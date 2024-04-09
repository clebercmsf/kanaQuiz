import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-praticle',
  templateUrl: './praticle.page.html',
  styleUrls: ['./praticle.page.scss'],
})
export class PraticlePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToHome () {
    this.router.navigate(['/home']);
  }
}
