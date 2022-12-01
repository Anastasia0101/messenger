import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { catchError, from, map, Observable, tap, throwError } from "rxjs";
import { User } from "../../shared/models/user.model";
type DefaultFireUser = firebase.default.User;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserData!: DefaultFireUser;
  constructor(
    private fireStore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.currentUserData = user;
        localStorage.setItem('token', JSON.stringify(this.currentUserData));
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

  signIn(email: string, password: string): Observable<DefaultFireUser> {
    return from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
      catchError(error => throwError(error)),
      map(result => result.user!)
    );
  }

  signUp(email: string, password: string, nickname: string): Observable<firebase.default.User> {
    return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError(error => throwError(error)),
      tap((result) => {
        this.setUserData(result.user!, nickname);
      }),
      map((result) => result.user!)
    );
  }

  sendVerificationEmail(): Promise<void> {
    return this.fireAuth.currentUser.then((user) => user!.sendEmailVerification());
  }

  setUserData(user: DefaultFireUser, nickname: string): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);
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
