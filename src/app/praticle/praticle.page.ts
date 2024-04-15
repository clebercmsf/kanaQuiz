import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hiraganaQuizVariables } from './variables/hiragana.variables';
import { hiraganaVariationQuizVariables } from './variables/hiragana-variations.variables';
import { katakanaQuizVariables } from './variables/katakana.variables';
import { katakanaVariationQuizVariables } from './variables/katakana-variations.variables';

@Component({
  selector: 'app-praticle',
  templateUrl: './praticle.page.html',
  styleUrls: ['./praticle.page.scss'],
})

export class PraticlePage implements OnInit {
  constructor (private router: Router) { }

  ngOnInit () {
  }

  moveToHome () {
    this.router.navigate(['/home']);
  }

  enableVariables () {
    setTimeout(() => {
      const hiraganaQuiz: any = document.getElementById("hiraganaQuiz");
      const katakanaQuiz: any = document.getElementById("katakanaQuiz");
      const variablesQuiz: any = document.getElementById("variablesQuiz");
      const startQuiz: any = document.getElementById("startQuiz");

      hiraganaQuiz.checked || katakanaQuiz.checked ? variablesQuiz.disabled = false : variablesQuiz.disabled = true;
      if (hiraganaQuiz.checked || katakanaQuiz.checked) {
        variablesQuiz.disabled = false;
        startQuiz.disabled = false;
      } else {
        variablesQuiz.disabled = true;
        variablesQuiz.checked = false;
        startQuiz.disabled = true;
      }
    }, 1);
  }

  // Quiz //
  generateLetterList () {
    const hiraganaQuiz: any = document.getElementById("hiraganaQuiz");
    const katakanaQuiz: any = document.getElementById("katakanaQuiz");
    const variablesQuiz: any = document.getElementById("variablesQuiz");
    const letterList: { letter: string; value: string; alphabet: string }[] = [];

    if (hiraganaQuiz.checked) {
      letterList.push(...hiraganaQuizVariables);
    } if (katakanaQuiz.checked) {
      letterList.push(...katakanaQuizVariables);
    }if (hiraganaQuiz.checked && variablesQuiz.checked) {
      letterList.push(...hiraganaVariationQuizVariables);
    } if (katakanaQuiz.checked && variablesQuiz.checked) {
      letterList.push(...katakanaVariationQuizVariables);
    }

    console.log(letterList);
    return letterList;
  }

  startQuiz () {
    const homeContainer: any = document.querySelector(".home__container");
    const containerQuiz: any = document.querySelector(".container__quiz");

    homeContainer.classList.add("hide");
    containerQuiz.classList.remove("hide");
  }
}
