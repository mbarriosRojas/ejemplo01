// Importaciones nécessarias
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Módulo de autenticación
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }])
  ],
  providers: [AuthService]
})
export class AuthModule { }
