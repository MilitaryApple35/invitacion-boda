import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../atoms/card/card.component';
import { CoupleHeaderComponent } from '../../molecules/couple-header/couple-header.component';
import { InfoSectionComponent } from '../../molecules/info-section/info-section.component';
import { EventInfoComponent } from '../../molecules/event-info/event-info.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CountdownTimerComponent } from '../../atoms/countdown-timer/countdown-timer.component';
import { LocationMapComponent } from '../../molecules/location-map/location-map.component';
import { EventDateComponent } from '../../molecules/event-date/event-date.component';
import { CouplePhotoComponent } from '../../atoms/couple-photo/couple-photo.component';
import { RsvpWhatsappComponent } from '../../molecules/rsvp-whatsapp/rsvp-whatsapp.component';

@Component({
  selector: 'app-wedding-invitation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CoupleHeaderComponent,
    InfoSectionComponent,
    EventInfoComponent,
    DividerComponent,
    TextComponent,
    CountdownTimerComponent,
    LocationMapComponent,
    EventDateComponent,
    CouplePhotoComponent,
    RsvpWhatsappComponent
  ],
  template: `
    <!-- Fondo responsivo con fotos -->
    <div class="min-h-screen relative overflow-hidden">

      <!-- Fondo para desktop -->
      <div class="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
           [style.background-image]="'url(' + desktopBackground + ')'">
      </div>

      <!-- Fondo para móvil -->
      <div class="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
           [style.background-image]="'url(' + mobileBackground + ')'">
      </div>

      <!-- Overlay dorado semi-transparente -->
      <div class="absolute inset-0 bg-gradient-to-br from-gold-50/80 to-gold-100/80"></div>

      <!-- Contenido principal -->
      <div class="relative z-10 p-4">
        <div class="max-w-2xl mx-auto">
          <app-card padding="xl" background="white" [shadow]="true">

            <!-- Foto circular de los novios -->
            <app-couple-photo
              [photoSrc]="couplePhoto"
              altText="Erika y Edwin">
            </app-couple-photo>

            <!-- Encabezado de los novios -->
            <app-couple-header
              brideName="Erika Tirado Luna"
              groomName="Edwin Esaú Zatarain López">
            </app-couple-header>

          <!-- Fecha del evento -->
          <app-event-date [eventDate]="weddingDate"></app-event-date>

          <!-- Contador de cuenta regresiva -->
          <app-countdown-timer [weddingDate]="weddingDate"></app-countdown-timer>

          <!-- Información de los padres -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <app-info-section
              title="Padres de la Novia"
              [content]="brideParents"
              titleSize="small"
              textSize="sm">
            </app-info-section>

            <app-info-section
              title="Padres del Novio"
              [content]="groomParents"
              titleSize="small"
              textSize="sm">
            </app-info-section>
          </div>

          <app-divider color="gold" [decorative]="true" margin="lg"></app-divider>

          <!-- Información de la ceremonia -->
          <app-event-info
            eventType="Ceremonia Religiosa"
            time="4:00 PM"
            location="Nuestra Señora de Guadalupe"
            address="El Recreo">
          </app-event-info>

          <!-- Información de la fiesta -->
          <app-event-info
            eventType="Recepción"
            time="7:00 PM"
            location="La Pista del Pueblo"
            address="El Recreo">
          </app-event-info>

          <!-- Mapa de ubicación -->
          <app-location-map
            locationName="El Recreo"
            address="El Recreo, Sinaloa, México"
            [latitude]="locationCoordinates.latitude"
            [longitude]="locationCoordinates.longitude">
          </app-location-map>

          <app-divider color="gold" [decorative]="true" margin="lg"></app-divider>

          <!-- Información de padrinos -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <app-info-section
              title="Padrinos de Anillos"
              [content]="ringSponsors"
              titleSize="small"
              textSize="sm">
            </app-info-section>

            <app-info-section
              title="Padrinos de Matrimonio"
              [content]="marriageSponsors"
              titleSize="small"
              textSize="sm">
            </app-info-section>

            <app-info-section
              title="Padrinos de Velación"
              [content]="weddingSponsors"
              titleSize="small"
              textSize="sm"
              class="md:col-span-2"
            >
            </app-info-section>
          </div>

          <app-divider color="gold" [decorative]="true" margin="lg"></app-divider>

          <!-- Información del regalo -->
          <div class="text-center bg-gold-50 p-6 rounded-lg border border-gold-200">
            <app-text
              content="Regalo Monetario"
              size="lg"
              color="gold"
              weight="semibold"
              [center]="true">
            </app-text>
            <app-text
              content="Tu presencia es nuestro mayor regalo, pero si deseas obsequiarnos algo, agradecemos tu aportación monetaria."
              size="sm"
              color="muted"
              [center]="true"
              [italic]="true">
            </app-text>
          </div>

          <!-- <app-divider color="gold" [decorative]="true" margin="lg"></app-divider> -->

          <!-- Confirmación de asistencia por WhatsApp -->
          <!-- <app-rsvp-whatsapp
            [confirmationDate]="rsvpDeadline"
            [whatsappContacts]="whatsappContacts"
            [suggestedMessage]="rsvpMessage">
          </app-rsvp-whatsapp> -->

          <app-divider color="gold" [decorative]="true" margin="lg"></app-divider>

          <!-- Mensaje final -->
          <div class="text-center">
            <app-text
              content="¡Esperamos contar con tu presencia en este día tan especial!"
              size="lg"
              color="gold"
              weight="medium"
              [center]="true"
              [italic]="true">
            </app-text>
          </div>

        </app-card>
      </div>
    </div>
    </div>
  `
})
export class WeddingInvitationComponent {
  // Fotos para los fondos y la imagen principal
  desktopBackground = 'assets/photo1.jpeg'; // Fondo para desktop
  mobileBackground = 'assets/photo1.jpeg';  // Fondo para móvil
  couplePhoto = 'assets/photo3.jpeg';       // Foto circular principal

  // Fecha de la boda - 2025 (ajustar según la fecha real)
  weddingDate = new Date('2025-11-22T16:00:00'); // 4 PM del día de la boda

  // Coordenadas exactas proporcionadas: 23°26'46.3"N 106°31'57.7"W
  locationCoordinates = {
    latitude: 23.446194,
    longitude: -106.532694
  };

  brideParents = [
    'Alejandra Luna Bernal',
    'Juan José Tirado Ramírez'
  ];

  groomParents = [
    'Magdalena López Leyva',
    'Gustavo Alonso Zatarain Guerra'
  ];

  ringSponsors = [
    'Natalia Marchen Saucedo',
    'Carlos Zamudio Tirado'
  ];

  marriageSponsors = [
    'Bricia Zatarain López',
    'Juan Pablo Lizárraga Tiznado'
  ];

  weddingSponsors = [
    'Pamela Osuna',
    'Luis A. Zamudio'
  ];

  // Configuración para confirmación de asistencia por WhatsApp
  rsvpDeadline = '10 de Diciembre, 2025';

  whatsappContacts = [
    { name: 'Erika (Novia)', phone: '+521234567890' },
    { name: 'Edwin (Novio)', phone: '+521234567891' }
  ];

  rsvpMessage = '¡Hola! Confirmo mi asistencia a la boda de Erika y Edwin. ¡Nos vemos ahí! 💕';
}
