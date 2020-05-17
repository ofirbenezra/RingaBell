import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(public afAuth: AngularFireAuth) {

  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public login(userName: string, paswword: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(userName, paswword)
        .then(function (firebaseUser) {
          this.loggedIn.next(true);
          resolve();
        })
        .catch(function (error) {
          this.loggedIn.next(false);
          reject(error);
        });
    });
  }

  logout() {
    this.loggedIn.next(false);
    // this.router.navigate(['/login']);
  }

  register(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
        resolve();
      })
        .catch(function (error) {
          reject(error);
        });
    });

    // this.sendEmailVerification();
  }
}
