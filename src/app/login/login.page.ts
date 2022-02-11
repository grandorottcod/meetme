import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Router,  NavigationExtras} from '@angular/router';
import { query, where, getDocs} from "firebase/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }
  
  email: string = "";
  password: string = "";
  userDoesntExist: boolean = false;
  
  constructor(private firestore: Firestore, private router: Router){}
  
  
  async signin(){
    let userExists: boolean = false;
    const userRef = collection(this.firestore, 'users');
    const userDocument = query(collection(this.firestore, "users"), where("email", "==", this.email), 
                         where("password", "==", this.password));
    const userDocumentSnapshot = await getDocs(userDocument);
    userDocumentSnapshot.forEach((doc) => {
      userExists = true;
    })
    if(userExists){
      this.userDoesntExist = false;
      let navigationExtras: NavigationExtras = {
        state: {
          email: this.email
        }
      }
      this.router.navigate(['/tablinks/profile'], navigationExtras);
    }
    else{
      this.userDoesntExist = true;
    }
  }

}
