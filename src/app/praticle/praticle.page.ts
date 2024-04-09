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

  enableVariables() {
    setTimeout(() => {
      const hiraganaQuiz: any = document.getElementById("hiraganaQuiz");
      const katakanaQuiz: any = document.getElementById("katakanaQuiz");
      const variablesQuiz: any = document.getElementById("variablesQuiz");

      hiraganaQuiz.checked || katakanaQuiz.checked ? variablesQuiz.disabled = false : variablesQuiz.disabled = true;
      if (variablesQuiz.disabled === true) {
        variablesQuiz.checked = false;
      }
    }, 1);
  }
}
