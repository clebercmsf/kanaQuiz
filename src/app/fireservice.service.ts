import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) { }

  loginWithEmail (data: { email: string; password: string; }) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup (data: { email: string; password: string; }) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails (data: { uid: any; }) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }

  getDetails (data: { uid: any; }) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
}