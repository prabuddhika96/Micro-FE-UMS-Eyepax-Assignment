import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonModule],
  template: ` <button nz-button nzType="primary">Primary Button</button> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ums-angular';
}
