import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-rsvp-whatsapp',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent, DividerComponent],
  template: `
    <div class="text-center bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-6">
      <div class="mb-4">
        <div class="text-5xl mb-3">📱</div>
        <app-title
          text="Confirma tu Asistencia"
          size="large"
          color="dark"
          [elegant]="true">
        </app-title>
      </div>

      <app-divider color="dark" margin="sm"></app-divider>

      <div class="space-y-4">
        <app-text
          content="Por favor confirma tu asistencia antes del:"
          size="base"
          color="dark"
          [center]="true">
        </app-text>

        <app-text
          [content]="confirmationDate"
          size="lg"
          color="dark"
          weight="bold"
          [center]="true">
        </app-text>

        <div class="my-6">
          <app-text
            content="Envía un mensaje de WhatsApp a:"
            size="base"
            color="muted"
            [center]="true">
          </app-text>

          <div class="mt-4 space-y-3">
            <div *ngFor="let contact of whatsappContacts" class="bg-white p-4 rounded-lg border border-green-300">
              <app-text
                [content]="contact.name"
                size="lg"
                color="dark"
                weight="semibold"
                [center]="true">
              </app-text>

              <a
                [href]="getWhatsAppUrl(contact.phone)"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200 mt-2 w-full">
                <span class="text-xl">💬</span>
                <span>{{ contact.phone }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-green-100 p-4 rounded-lg">
          <app-text
            content="💡 Mensaje sugerido:"
            size="sm"
            color="dark"
            weight="semibold"
            [center]="true">
          </app-text>

          <app-text
            [content]="suggestedMessage"
            size="sm"
            color="muted"
            [italic]="true"
            [center]="true">
          </app-text>
        </div>
      </div>
    </div>
  `
})
export class RsvpWhatsappComponent {
  @Input() confirmationDate: string = '10 de Diciembre, 2025';
  @Input() whatsappContacts: Array<{name: string, phone: string}> = [];
  @Input() suggestedMessage: string = '¡Hola! Confirmo mi asistencia a la boda de Erika y Edwin. ¡Nos vemos ahí! 💕';

  getWhatsAppUrl(phone: string): string {
    const cleanPhone = phone.replace(/\D/g, ''); // Remover caracteres no numéricos
    const message = encodeURIComponent(this.suggestedMessage);
    return `https://wa.me/${cleanPhone}?text=${message}`;
  }
}
