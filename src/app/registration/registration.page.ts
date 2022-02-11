import { Component, OnInit } from '@angular/core';
//import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { query, where, getDocs} from "firebase/firestore";
import { User, UserMaker } from '../global-types.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { getAuth, updateProfile } from "firebase/auth";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user : UserMaker = new UserMaker(); 
  userExistsGlobal: boolean = false;
  signUpSuccess: boolean = false;
  errorDb: boolean = false;
  EMAIL_EXISTS = "auth/email-already-in-use";


  constructor(/*private firestore: Firestore*/ private authService: AuthenticationServiceService) { }

  ngOnInit() {
  }

  async signup(){
    this.userExistsGlobal = false;
    this.signUpSuccess = false;
    this.errorDb = false;
    console.log(this.authService);
    this.authService.RegisterUser(this.user.email, this.user.password)
    .then((success) => {this.signUpSuccess = true;})
    .catch((error) => {
      const errorcode = error.code;
      const errorMessage = error.message;
      if( errorcode == this.EMAIL_EXISTS){
        this.userExistsGlobal = true;
      }
      else{
        this.errorDb = true;
      }
    })
    /* const usersRef = collection(this.firestore, 'users');
    const userDocument = query(collection(this.firestore, "users"), where("email", "==", this.user.email));
    const userDocumentSnapshot = await getDocs(userDocument);
    let userExists: boolean = false;
    userDocumentSnapshot.forEach((doc) => {
      userExists = true;
    })
    if(!userExists){
    addDoc(usersRef, this.user.getUser()).catch(error => {
        this.errorDb = true;
        throw error;
      });
      this.userExistsGlobal = false;
      this.signUpSuccess = true;
    }
    else{
      this.userExistsGlobal = true;
    }*/
  }
}
