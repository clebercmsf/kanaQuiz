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
  answers: QuizQuestions[];
}

@Component({
  selector: 'app-praticle',
  templateUrl: './praticle.page.html',
  styleUrls: ['./praticle.page.scss'],
})

export class PraticlePage implements OnInit {
  private letterList: QuizQuestions[] = [];
  private questionsList: QuizQuestions[] = [];
  private totalQuestions: number = 2;
  private correctAnswers: number = 0;
  public showHomeContainer: boolean = true;
  public showNextQuestionBtn: boolean = false;


  constructor (private router: Router) { }

  ngOnInit () {
  }

  updateHomeContainer () {
    this.showHomeContainer = !this.showHomeContainer;
  }

  updateNextQuestionBtn () {
    this.showNextQuestionBtn = !this.showNextQuestionBtn;
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
    const optionList = letterList.slice(0, this.totalQuestions);
    this.questionsList = this.shuffleArray([...optionList]);
  }

  generateQuestions () {
    const question: QuizQuestions = this.questionsList[0];
    const trueAnswer = question.letter;

    // Filtra 3 respostas erradas, adiciona a resposta correta e as embaralha.
    let falseAnswers = this.letterList.filter(question => question.letter !== trueAnswer);
    falseAnswers = this.shuffleArray(falseAnswers);
    let answers = falseAnswers.slice(0,3);
    answers.push(question);
    answers = this.shuffleArray(answers);

    const newQuestion: Quiz = {
      question: question,
      answers: answers
    }

    this.questionsList.shift();

    return newQuestion;
  }

  displayNextQuestion () {
    this.resetState();

    if (this.questionsList.length === 0) {
      const answersContainer: any = document.querySelector(".container__quiz");
      answersContainer.classList.add("hide");
      return this.finishQuiz();
    }

    const answersContainer: any = document.querySelector(".quiz__answers-container");
    const questionText: any = document.getElementById("question");
    const newQuestion: Quiz = this.generateQuestions();
    
    // Cria os elementos de pergunta e alternativas.
    questionText.textContent = newQuestion.question.letter;
    for (let i: number = 0; i < 4; i++) {
      const newAnswer = document.createElement("ion-button");
      newAnswer.classList.add("answer");
      newAnswer.style.setProperty("height", "3rem");
      newAnswer.style.setProperty("--background", "var(--color-primary)");
      newAnswer.style.setProperty("--background-activated", "var(--color-primary-shade)");
      newAnswer.style.setProperty("--color", "var(--color-secondary)");
      newAnswer.textContent = newQuestion.answers[i].value;
      
      if (newQuestion.answers[i].value === newQuestion.question.value) {
        newAnswer.setAttribute("data-correct", "true");
      }
      newAnswer.addEventListener("click", this.selectAnswer);

      answersContainer.appendChild(newAnswer);
    }
  }

  resetState () {
    const answersContainer: any = document.querySelector(".quiz__answers-container");
    const letterBox: any = document.getElementById("question");

    letterBox.removeAttribute("class");
    this.showNextQuestionBtn === true ? this.updateNextQuestionBtn() : undefined;

    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }
  }

  selectAnswer = (event: Event) => {
    const answerClicked = event.target as HTMLElement;
    const letterBox: any = document.getElementById("question");

    if (answerClicked.dataset['correct']) {
      letterBox.classList.add("correct");
      answerClicked.style.setProperty("--background", "var(--color-correct)");
      this.correctAnswers++;
    } else {
      letterBox.classList.add("incorrect");
      answerClicked.style.setProperty("--background", "var(--color-incorrect)");
    }

    (document.querySelectorAll(".answer") as NodeListOf<HTMLButtonElement>).forEach(button => {
      button.disabled = true;
    });

    this.updateNextQuestionBtn();
  }

  startQuiz () {
    this.updateHomeContainer();
    const answersContainer: any = document.querySelector(".container__quiz");
    answersContainer.classList.remove("hide");
    
    this.generateLetterList();
    this.displayNextQuestion();
  }

  finishQuiz () {
    const precisionContainer: any = document.getElementById("precisionContainer");
    const precisionPercent: any = document.querySelector(".precisionPercent");
    precisionContainer.classList.remove("hide");
    const performance = Math.floor((this.correctAnswers / this.totalQuestions) * 100);
    
    precisionPercent.textContent = `${performance}%`;
  }

  tryAgain () {
    window.location.reload();
  }
}
