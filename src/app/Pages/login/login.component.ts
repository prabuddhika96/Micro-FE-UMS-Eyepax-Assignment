import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , NgForm} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule , ReactiveFormsModule ,  CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log('Login object:', this.loginObj);
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('logintoken')}`);

    this.http.post<any>('https://localhost:7036/api/Authentication', this.loginObj).subscribe(
      (response: any) => {
        console.log('Response from server:', response);
        if (response && response.token) {
          alert("Login successful");
          localStorage.setItem("logintoken", response.token);
          console.log("response.token:", response.token);
          this.router.navigateByUrl('/dashboard');
          
        }
      },
      (error) => {
        alert(error.error.title + ": The User doesnt exist");
        console.log("error:", error);
        this.router.navigateByUrl('/login');
      }
    );
  }

}

export class Login {

  UserName: string;
  Password: string;

  constructor() {
    this.UserName = '';
    this.Password = '';

  }

}
