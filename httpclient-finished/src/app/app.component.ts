import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCTDQKZVgNxViOpZ-pa3OWgz7WNcP4R3Fw",
      authDomain: "angular-complete-guide-5e55a.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
