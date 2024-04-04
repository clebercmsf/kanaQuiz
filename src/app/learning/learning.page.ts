import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToHome () {
    this.router.navigate(['/home']);
  }
}
