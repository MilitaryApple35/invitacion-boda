import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeddingInvitationComponent } from './components/organisms/wedding-invitation/wedding-invitation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeddingInvitationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
