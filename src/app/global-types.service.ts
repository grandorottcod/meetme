import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalTypesService {

  constructor() { }
}

export interface User{
  email: string,
  firstname: string,
  lastname: string,
  password: string
}

export class UserMaker{
  email: string;
  firstname: string;
  lastname: string;
  password: string;
   
  public setUser(email: string, firstname: string, lastname: string, password: string){
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
  }

  public setUserBasedOnType(user: User){
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.password = user.password;
  }

  public getUser(){
    return {email: this.email, firstname: this.firstname, lastname: this.lastname, password: this.password};
  }

}

export interface UpdateProfileResponse{
  UserExistsGlobal: boolean;
  SignUpSuccess: boolean;
  ErrorDb: boolean;
}
