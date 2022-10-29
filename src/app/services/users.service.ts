import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private fireStore: AngularFirestore,
  ) { }

  createUser(avatar: string, nickname: string, email: string): void {
    this.fireStore.collection('users').add({
      avatar: avatar,
      nickname: nickname,
      email: email
    });
  }
}
