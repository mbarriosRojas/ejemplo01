// Importaciones nécessarias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { RegisterInterface } from '../interfaces/register.interface';

// Componente de registro
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Formulario de registro
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Mensaje de error
  errorMessage = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  // Método de registro
  onRegister(): void {
    if (this.registerForm.valid) {
      const registerData: RegisterInterface = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      // Llamada al servicio de registro
      this.userService.register(registerData).subscribe({
        next: (response) => {
          // En caso de éxito, redirigir al login
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // En caso de error, mostrar mensaje
          this.errorMessage = error.message;
        }
      });
    } else {
      // En caso de formulario inválido, mostrar mensaje
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
