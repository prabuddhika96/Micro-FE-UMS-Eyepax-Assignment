import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ` <section class="">
    <form [formGroup]="editProfileForm" (submit)="handleSubmit($event)">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" formControlName="firstName" />
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" formControlName="lastName" />
      <label for="email">Email</label>
      <input type="text" id="email" formControlName="email" />

      <button class="primary" type="submit">Apply Now</button>
    </form>
  </section>`,
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  editProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.editProfileForm.value);
  }
}
