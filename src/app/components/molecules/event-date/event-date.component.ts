import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-event-date',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent, DividerComponent],
  template: `
    <div class="text-center bg-gold-100 p-6 rounded-lg border-2 border-gold-300 mb-6">
      <div class="mb-4">
        <div class="text-4xl mb-2">📅</div>
        <app-title
          text="Fecha del Evento"
          size="large"
          color="gold"
          [elegant]="true">
        </app-title>
      </div>

      <app-divider color="gold" margin="sm"></app-divider>

      <div class="space-y-2">
        <app-text
          [content]="dayName"
          size="lg"
          color="dark"
          weight="semibold"
          [center]="true">
        </app-text>

        <app-text
          [content]="formattedDate"
          size="xl"
          color="gold"
          weight="bold"
          [center]="true">
        </app-text>

        <app-text
          [content]="year"
          size="lg"
          color="dark"
          weight="medium"
          [center]="true">
        </app-text>

        <!-- Hora del evento -->
        <div class="mt-4 pt-3 border-t border-gold-200">
          <div class="text-3xl mb-2">🕐</div>
          <app-text
            [content]="formattedTime"
            size="xl"
            color="gold"
            weight="bold"
            [center]="true">
          </app-text>
        </div>
      </div>
    </div>
  `
})
export class EventDateComponent {
  @Input() eventDate!: Date;

  get dayName(): string {
    return this.eventDate.toLocaleDateString('es-ES', { weekday: 'long' }).toUpperCase();
  }

  get formattedDate(): string {
    return this.eventDate.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long'
    }).toUpperCase();
  }

  get year(): string {
    return this.eventDate.getFullYear().toString();
  }

  get formattedTime(): string {
    return this.eventDate.toLocaleTimeString('es-ES', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).toUpperCase();
  }
}
