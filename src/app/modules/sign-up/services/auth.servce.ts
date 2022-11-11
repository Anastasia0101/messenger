import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { User } from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public fireStore: AngularFirestore,
    public fireAuth: AngularFireAuth
  ) {}

  signUp(email: string, password: string): Promise<void> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationEmail();
        this.setUserData(result.user!);
      });
  }

  sendVerificationEmail(): Promise<void> {
    return this.fireAuth.currentUser.then((user) => user!.sendEmailVerification());
  }

  setUserData(user: firebase.default.User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);
    console.log('set user data');
    const userData: User = {
      id: user.uid,
      email: user.email!,
      nickname: user.displayName!,
      avatar: user.photoURL!,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
