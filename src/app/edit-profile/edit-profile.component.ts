import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  userDetails: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
  };

  editProfileForm = new FormGroup({
    firstName: new FormControl(this.userDetails.firstName, Validators.required),
    lastName: new FormControl(this.userDetails.lastName, Validators.required),
    email: new FormControl(this.userDetails.email, [
      Validators.required,
      Validators.email,
    ]),
  });

  errorMessages: any = {}; // Initialize errorMessages as an empty object

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.editProfileForm.valid) {
      console.log(this.editProfileForm.value);
    } else {
      this.editProfileForm.markAllAsTouched();
      // Clear previous error messages
      this.errorMessages = {};

      // Iterate through each form control to check for validation errors
      Object.keys(this.editProfileForm.controls).forEach((key) => {
        const controlErrors = this.editProfileForm.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            switch (keyError) {
              case 'required':
                this.errorMessages[key] = `${key} is required`;
                break;
              case 'email':
                this.errorMessages[key] = `${key} must be a valid email`;
                break;
              default:
                break;
            }
          });
        }
      });
    }
  }
}
