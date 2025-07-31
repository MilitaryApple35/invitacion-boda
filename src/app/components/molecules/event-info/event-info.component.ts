import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent, DividerComponent],
  template: `
    <div class="bg-gold-50 p-6 rounded-lg border-2 border-gold-200 mb-6">
      <app-title
        [text]="eventType"
        size="large"
        color="gold"
        [elegant]="true">
      </app-title>

      <app-divider color="gold" margin="sm"></app-divider>

      <div class="space-y-3">
        <app-text
          [content]="time"
          size="lg"
          color="dark"
          weight="semibold"
          [center]="true">
        </app-text>

        <app-text
          [content]="location"
          size="base"
          color="dark"
          [center]="true">
        </app-text>

        <app-text
          *ngIf="address"
          [content]="address"
          size="sm"
          color="muted"
          [italic]="true"
          [center]="true">
        </app-text>
      </div>
    </div>
  `
})
export class EventInfoComponent {
  @Input() eventType: string = '';
  @Input() time: string = '';
  @Input() location: string = '';
  @Input() address: string = '';
}
