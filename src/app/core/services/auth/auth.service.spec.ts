import { TestBed } from '@angular/core/testing';
import { Auth, User, UserCredential } from '@angular/fire/auth';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  const auth = jasmine.createSpy();
  const authState$ = new BehaviorSubject<User | null>(null);

  beforeEach(async () => {
    spyOn(WrapperFunctionFirebase, 'authState').and.returnValue(authState$);

    await MockBuilder(AuthService).provide({ provide: Auth, useValue: auth });

    authService = ngMocks.findInstance(AuthService);
  });

  it('Servicio de autenticación creado', () => {
    expect(authService).toBeDefined();
  });

  it('Deberia retornar mensaje (Usuario Incorrecto)', (done: DoneFn) => {
    authState$.next(null);

    authService.user$.pipe(first()).subscribe({
      next: (v) => {
        expect(v).toBeNull();
        done();
      },
      error: done.fail,
    });
  });

  /*   it('Debería retornar mensaje (Cuenta creada correctamente) ', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'createUserWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));

    authService
      .createAccount({ email: 'juan@mail.com', password: '123456' })
      .pipe(first())
      .subscribe({
        next: () => {
          expect(
            WrapperFunctionFirebase.createUserWithEmailAndPassword
          ).toHaveBeenCalledWith(auth, 'juan@mail.com', '123456');
          done();
        },
        error: done.fail,
      });
  }); */

  /*  it('Deberia retornar mensaje (Inicio de sesión Correcto)', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'signInWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));

    authService
      .login({ email: 'juan@mail.com', password: '123456' })
      .pipe(first())
      .subscribe({
        next: () => {
          expect(
            WrapperFunctionFirebase.signInWithEmailAndPassword
          ).toHaveBeenCalledWith(auth, 'juan@mail.com', '123456');
          done();
        },
        error: done.fail,
      });
  });

  it('Deberia retornar mensaje (Inicio de sesión con Google)', (done: DoneFn) => {
    spyOn(WrapperFunctionFirebase, 'signInWithPopup').and.returnValue(
      Promise.resolve({} as unknown as UserCredential)
    );

    authService
      .googleLogin()
      .pipe(first())
      .subscribe({
        next: () => {
          expect(WrapperFunctionFirebase.signInWithPopup).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
  });

  it('Deberia retornar mensaje (Sesión de usuario Finalizada)', () => {
    spyOn(WrapperFunctionFirebase, 'signOut').and.returnValue(
      Promise.resolve()
    );

    authService.logout();

    expect(WrapperFunctionFirebase.signOut).toHaveBeenCalled();
  }); */

  it('Debería retornar mensaje (Cuenta creada correctamente) ', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'createUserWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));

    authService
      .createAccount({ email: 'juan@mail.com', password: '123456' })
      .then(() => {
        expect(
          WrapperFunctionFirebase.createUserWithEmailAndPassword
        ).toHaveBeenCalledWith(auth, 'juan@mail.com', '123456');
        done();
      })
      .catch((error) => done.fail);
  });

  it('Deberia retornar mensaje (Inicio de sesión Correcto)', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'signInWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));

    authService
      .login({ email: 'juan@mail.com', password: '123456' })
      .then(() => {
        expect(
          WrapperFunctionFirebase.signInWithEmailAndPassword
        ).toHaveBeenCalledWith(auth, 'juan@mail.com', '123456');
        done();
      })
      .catch((error) => done.fail);
  });

  it('Deberia retornar mensaje (Inicio de sesión con Google)', (done: DoneFn) => {
    spyOn(WrapperFunctionFirebase, 'signInWithPopup').and.returnValue(
      Promise.resolve({} as unknown as UserCredential)
    );

    authService
      .googleLogin({ email: 'juan@mail.com', password: '123456' })
      .then(() => {
        expect(WrapperFunctionFirebase.signInWithPopup).toHaveBeenCalled();
        done();
      })
      .catch((error) => done.fail);
  });

  it('Deberia retornar mensaje (Sesión de usuario Finalizada)', () => {
    spyOn(WrapperFunctionFirebase, 'signOut').and.returnValue(
      Promise.resolve()
    );

    authService.logout();

    expect(WrapperFunctionFirebase.signOut).toHaveBeenCalled();
  });
});
