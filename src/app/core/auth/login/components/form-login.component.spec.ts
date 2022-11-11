import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { FormLoginComponent } from './form-login.component';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLoginComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir el FormLoginComponent', () => {
    const fixture = TestBed.createComponent(FormLoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*   it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(FormLoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const email = app.formLogin.controls['email'];
    email.setValue('dasilva@mail.com');
    expect(app.formLogin.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(FormLoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    let email = app.formLogin.controls['email'];
    let password = app.formLogin.controls['password'];
    email.setValue('dasilva@mail.com');
    password.setValue(1234);
    expect(app.formLogin.invalid).toBeFalse();
  }); */
});
