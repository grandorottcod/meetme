import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { query, where, getDocs} from "firebase/firestore";
import { BehaviorSubject } from 'rxjs';
import { User , UserMaker} from '../global-types.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  email: string = "";
  renderProfile: Boolean = false;
  user: UserMaker;
  dataReceived: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  constructor(/*private route: ActivatedRoute, private router: Router, private firestore: Firestore*/) { 
    /*
    this.route.queryParams.subscribe(params => {
         if(this.router.getCurrentNavigation().extras.state){
           this.email = this.router.getCurrentNavigation().extras.state.email;
           if(this.email){
           this.dataReceived.next(true);
           }
         }
    });
    */
  }
  

  ngOnInit() {
    /*
     this.dataReceived.subscribe(async (value) => {
       if(true == value){
         this.user = new UserMaker();
          console.log(this.email);
          const userDocument = query(collection(this.firestore, "users"), where("email", "==", this.email));
          const userDocumentSnapshot = await getDocs(userDocument);  
          let userExists: boolean = false;;
          userDocumentSnapshot.forEach((doc) => {
             this.user.setUser(doc.data().email, doc.data().firstname, doc.data().lastname, doc.data().password);
             userExists = true;
          })
          if(userExists){
            this.renderProfile = true;
          }
       }
     });
     */
  }

}
