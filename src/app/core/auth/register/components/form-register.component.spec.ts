import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { FormRegisterComponent } from './form-register.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CommonModule } from '@angular/common';

describe('FormRegisterComponent', () => {
  /*   let authService: AuthService; */
  let component: FormRegisterComponent;
  let fixture: ComponentFixture<FormRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormRegisterComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        CommonModule,
        ReactiveFormsModule,
      ],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(FormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe existir el FormRegisterComponent', () => {
    const fixture = TestBed.createComponent(FormRegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar formulario de registro invalido', () => {
    const fixture = TestBed.createComponent(FormRegisterComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const email = app.formRegister.controls['email'];
    email.setValue('dasilva@mail.com');
    expect(app.formRegister.invalid).toBeTrue();
  });

  it('Debe retornar formulario de registro valido', () => {
    const fixture = TestBed.createComponent(FormRegisterComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    let email = app.formRegister.controls['email'];
    let password = app.formRegister.controls['password'];
    email.setValue('dasilva@mail.com');
    password.setValue(1234);
    expect(app.formRegister.invalid).toBeFalse();
  });
  /* it('Debe retornar formulario de registro invalido', () => {
    const fixture = TestBed.createComponent(FormRegisterComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const email = app.formRegister.controls['email'];
    email.setValue('dasilva@mail.com');
    expect(app.formRegister.invalid).toBeTrue();
  });

 */
  /*   it(`Debe de actulizar datos de usuario`, () => {
    const fixture = TestBed.createComponent(FormRegisterComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let email = app.formRegister.controls['email'];
    let password = app.formRegister.controls['password'];

    email.setValue('leifer33@gmail.com');
    password.setValue('123456');

    const btnElement = fixture.debugElement.query(By.css('button.btn'));
    btnElement.nativeElement.click();

    expect(app.isCheck).toEqual(true);
  }); */
  /* const testData = isCheck;  */
});
