import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hiraganaQuizVariables } from './variables/hiragana.variables';
import { hiraganaVariationQuizVariables } from './variables/hiragana-variations.variables';
import { katakanaQuizVariables } from './variables/katakana.variables';
import { katakanaVariationQuizVariables } from './variables/katakana-variations.variables';

type QuizQuestions = {
  letter: string;
  value: string;
  alphabet: string;
}
type Quiz = {
  question: QuizQuestions;
  answer1: QuizQuestions;
  answer2: QuizQuestions;
  answer3: QuizQuestions;
  answer4: QuizQuestions;
}

@Component({
  selector: 'app-praticle',
  templateUrl: './praticle.page.html',
  styleUrls: ['./praticle.page.scss'],
})

export class PraticlePage implements OnInit {
  private letterList: QuizQuestions[] = [];
  private optionsList: QuizQuestions[] = [];
  private currentQuestion: any = 0;

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
  shuffleArray<T>(array: T[]): T[] {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  generateLetterList () {
    const hiraganaQuiz: any = document.getElementById("hiraganaQuiz");
    const katakanaQuiz: any = document.getElementById("katakanaQuiz");
    const variablesQuiz: any = document.getElementById("variablesQuiz");
    const letterList: QuizQuestions[] = [];

    if (hiraganaQuiz.checked) {
      letterList.push(...hiraganaQuizVariables);
    } if (katakanaQuiz.checked) {
      letterList.push(...katakanaQuizVariables);
    }if (hiraganaQuiz.checked && variablesQuiz.checked) {
      letterList.push(...hiraganaVariationQuizVariables);
    } if (katakanaQuiz.checked && variablesQuiz.checked) {
      letterList.push(...katakanaVariationQuizVariables);
    }

    this.letterList.push(...letterList);
    this.optionsList = this.shuffleArray([...letterList]);
  }

  generateQuestions () {
    const question: QuizQuestions = this.optionsList[0];
    const trueAnswer = question.value;

    // Filtra 3 respostas erradas, adiciona a resposta correta e as embaralha.
    let falseAnswers = this.letterList.filter(question => question.value !== trueAnswer);
    falseAnswers = this.shuffleArray(falseAnswers);
    const answers = falseAnswers.slice(0,3);
    answers.push(question);
    this.shuffleArray(answers);

    const newQuestion: Quiz = {
      question: question,
      answer1: answers[0],
      answer2: answers[1],
      answer3: answers[2],
      answer4: answers[3]
    }

    this.optionsList.shift();

    return newQuestion;
  }

  displayNextQuestion () {
    const answersContainer: any = document.querySelector(".quiz__answers-container");
    
    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }


  }

  startQuiz () {
    const homeContainer: any = document.querySelector(".home__container");
    const containerQuiz: any = document.querySelector(".container__quiz");
    homeContainer.classList.add("hide");
    containerQuiz.classList.remove("hide");
    this.generateLetterList();
    
    this.displayNextQuestion();
  }
}
