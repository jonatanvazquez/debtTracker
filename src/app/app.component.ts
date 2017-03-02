import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
  firebase.initializeApp({
  apiKey: "AIzaSyB_vok95d1BHbtZA_5lQI95ZuD1vR4qY8M",
  authDomain: "tracking-sam.firebaseapp.com",
  databaseURL: "https://tracking-sam.firebaseio.com",
  storageBucket: "tracking-sam.appspot.com",
  messagingSenderId: "1078562433957"
  });

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
