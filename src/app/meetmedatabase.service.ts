import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { query, where, getDocs} from "firebase/firestore";
import { UserMaker, UpdateProfileResponse } from './global-types.service';

@Injectable({
  providedIn: 'root'
})
export class MeetmedatabaseService {

  constructor(private firestore: Firestore) { }

  async updateProfile(user: UserMaker) : Promise<UpdateProfileResponse>{
    let userExistsGlobal: boolean = false;
    let signUpSuccess: boolean = false;
    let errorDb: boolean = false;
    const usersRef = collection(this.firestore, 'users');
    const userDocument = query(collection(this.firestore, "users"), where("email", "==", user.email));
    const userDocumentSnapshot = await getDocs(userDocument);
    let userExists: boolean = false;
    userDocumentSnapshot.forEach((doc) => {
      userExists = true;
    })
    if(!userExists){
    addDoc(usersRef, user.getUser()).catch(error => {
        errorDb = true;
      });
      userExistsGlobal = false;
      signUpSuccess = true;
    }
    else{
      userExistsGlobal = true;
    }
    let promiseResult : UpdateProfileResponse = {UserExistsGlobal: userExistsGlobal, SignUpSuccess : signUpSuccess, 
                                                ErrorDb : errorDb};
    return new Promise<UpdateProfileResponse>(resolve => {promiseResult})
  }
}


