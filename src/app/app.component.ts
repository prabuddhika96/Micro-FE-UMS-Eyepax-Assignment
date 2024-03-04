import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from "./Pages/signup/signup.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<main>
    <router-outlet></router-outlet>
  </main>`,
    // templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EditProfileComponent, LoginComponent, SignupComponent]
})
export class AppComponent {
  title = 'ums-angular';
}
