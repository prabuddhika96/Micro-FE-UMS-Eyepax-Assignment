import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule , RouterModule , CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupObj : Signup;
  issubmit : boolean = false;
  constructor(private http:HttpClient, private router:Router) {
    this.signupObj= new Signup() 
  }
  onSignUp() {
    console.log('Login object:', this.signupObj);
    this.issubmit = true;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('logintoken')}`);

    this.http.post<any>('https://localhost:7288/api/UserAPI', this.signupObj).subscribe(
      (response: any) => {
        console.log('Response from server:', response);
        if (response) {
          alert("signUp successful");
          this.router.navigateByUrl('/login');
        }
      },
      (error) => {
        if(error.error.msg){
          alert(error.error.msg);
        }else{
          alert("Make sure to fill all the fields correctly");
        }
        // alert(error.error.msg);
        // console.log('Error:', error);
        // this.router.navigateByUrl('/signup');
      }
    );
  }
  

}
export class Signup{
  
  UserName:string;
  FirstName:string;
  LastName:string;
  Email : string;
  Password : string;
  Role : string;
  constructor() {
    this.Email ='';
    this.Password ='';
    this.Role ='';
    this.UserName ='';
    this.LastName ='';
    this.FirstName = '';
  }

}