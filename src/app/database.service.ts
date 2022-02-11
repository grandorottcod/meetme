import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    firebaseConfig = {
    apiKey: "AIzaSyC9mFcfL56H-P6ul955NI0OLsfnyUENqsU",
    authDomain: "meet-me-1a850.firebaseapp.com",
    projectId: "meet-me-1a850",
    storageBucket: "meet-me-1a850.appspot.com",
    messagingSenderId: "227378900390",
    appId: "1:227378900390:web:34baa6fbf44a35d2b6f367",
    measurementId: "G-FVMNWDN2MM"
  };

  constructor() {
    
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);

   }


}
