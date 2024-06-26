import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  moveToHome () {
    this.router.navigate(['/home']);
  }

  moveToDakuten () {
    this.navCtrl.navigateForward('/dakuten', {
      animationDirection: 'forward'
    });
  }

  async textToSpeak (ev: any) {
    const request: string = ev.target.textContent;
    const requestData = {
      text: request
    };

    try {
      const response = await fetch("https://japanesespeaker.onrender.com/textConverter", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
  
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
  
      const audioElement = document.createElement('audio');
      audioElement.src = audioUrl;
      audioElement.autoplay = true;
      document.body.appendChild(audioElement);
  
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
