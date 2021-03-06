import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';
import { Db } from "../services/database";

@Injectable()
export class LocationTracker {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(public zone: NgZone, private db: Db) {

  }

  startTracking() {
	 // Background Tracking

	 let config = {
	   desiredAccuracy: 100,
	   stationaryRadius: 100,
	   distanceFilter: 100,
	   debug: false,
	   interval: 2000
	 };

	 BackgroundGeolocation.configure((location) => {

	   console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

	   // Run update inside of Angular's zone
	   this.zone.run(() => {
	     this.lat = location.latitude;
	     this.lng = location.longitude;
	     this.db.registro(this.lat,this.lng);
	   });

	  }, (err) => {

	   console.log(err);

	 }, config);

	 // Turn ON the background-geolocation system.
	 BackgroundGeolocation.start();


	 // Foreground Tracking

	 let options = {
	   frequency: 3000,
	   enableHighAccuracy: true
	 };

	 this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

	   console.log(position);

	   // Run update inside of Angular's zone
	   this.zone.run(() => {
	     this.lat = position.coords.latitude;
	     this.lng = position.coords.longitude;
	     this.db.registro(this.lat,this.lng);
	   });

	 });

  }

  stopTracking() {
	 console.log('stopTracking');

	 BackgroundGeolocation.finish();
	 this.watch.unsubscribe();

  }

}
