import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditProfileComponent],
  template: `<main>
    <app-edit-profile></app-edit-profile>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ums-angular';
}
