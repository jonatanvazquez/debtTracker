import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Db } from "../../services/database";
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private db: Db, public locationTracker: LocationTracker) {
    
  }


  start(){
      this.locationTracker.startTracking();
    }
   
    stop(){
      this.locationTracker.stopTracking();
    }

}
