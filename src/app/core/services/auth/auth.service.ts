import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';

@Injectable({
  providedIn: 'platform',
})
export class AuthService {
  [x: string]: any;
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = WrapperFunctionFirebase.authState(this.auth).pipe(
      map((user) =>
        user !== null
          ? ({
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
            } as User)
          : null
      )
    );
  }

  /*  async createAccount({ email, password }: any) {
    return from(
      WrapperFunctionFirebase.createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  }
 */

  async createAccount({ email, password }: any) {
    try {
      const user = await from(
        WrapperFunctionFirebase.createUserWithEmailAndPassword(
          this.auth,
          email,
          password
        )
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  /*  login({ email, password }: any) {
    return from(
      WrapperFunctionFirebase.signInWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  } */

  async login({ email, password }: any) {
    try {
      const user = await from(
        WrapperFunctionFirebase.signInWithEmailAndPassword(
          this.auth,
          email,
          password
        )
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  /*   googleLogin() {
    return from(
      WrapperFunctionFirebase.signInWithPopup(
        this.auth,
        new GoogleAuthProvider()
      )
    );
  }
 */

  async googleLogin({ email, password }: any) {
    try {
      const user = await from(
        WrapperFunctionFirebase.signInWithPopup(
          this.auth,
          new GoogleAuthProvider()
        )
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  /*   logout(): Observable<void> {
    return from(WrapperFunctionFirebase.signOut(this.auth));
  } */
  logout() {
    return WrapperFunctionFirebase.signOut(this.auth);
  }
}
