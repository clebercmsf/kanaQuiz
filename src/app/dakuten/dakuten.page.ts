import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dakuten',
  templateUrl: './dakuten.page.html',
  styleUrls: ['./dakuten.page.scss'],
})
export class DakutenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToLearning () {
    this.router.navigate(['/learning']);
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
