import firebase from 'firebase';


export class Db {
	//firebase.database().setPersistenceEnabled(true);
	registro(lat: number,lon: number){
		var time = new Date().getTime();
		var date = new Date(time);
		firebase.database().ref('usuario').push({
			lat: lat,
			lon: lon,
			time: date.toString()
		});
	}

}
