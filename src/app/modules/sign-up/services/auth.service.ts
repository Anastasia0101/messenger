import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { catchError, from, map, Observable, tap, throwError } from "rxjs";
import { User } from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!: firebase.default.User;
  constructor(
    private fireStore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('token', JSON.stringify(this.userData));
        return;
      }
      localStorage.setItem('token', 'null');
      JSON.parse(localStorage.getItem('user')!);
    });
  }

  isUserAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token')!);
    console.log(!!token);
    if (token) return true;
    return false;
  }

  signIn(email: string, password: string): void {
     from(this.fireAuth.signInWithEmailAndPassword(email, password));
      // tap((result) => {
      //   this.setUserData(result.user!);
      // }));
  }

  signUp(email: string, password: string, nickname: string): Observable<firebase.default.User> {
    return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError(error => {
        console.log('Sign up error' + error.code);
        return throwError(error);
      }),
      tap((result) => {
        this.sendVerificationEmail();
        this.setUserData(result.user!, nickname);
      }),
      map((result) => result.user!)
    );
  }

  sendVerificationEmail(): Promise<void> {
    return this.fireAuth.currentUser.then((user) => user!.sendEmailVerification());
  }

  setUserData(user: firebase.default.User, nickname: string): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);
    console.log('set user data');
    const userData: User = {
      id: user.uid,
      email: user.email!,
      nickname: nickname,
      avatar: user.photoURL!,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut(): void {
    from(this.fireAuth.signOut()).pipe(
      tap(() => {
        localStorage.removeItem('token');
      }),
    );
  }
}
