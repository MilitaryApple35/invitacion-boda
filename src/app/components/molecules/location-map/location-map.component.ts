import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent],
  template: `
    <div class="bg-gold-50 p-6 rounded-lg border border-gold-200 mb-6">
      <app-title
        text="Ubicación"
        size="large"
        color="gold"
        [elegant]="true">
      </app-title>

      <div class="mt-4 space-y-4">
        <app-text
          [content]="locationName"
          size="lg"
          color="dark"
          weight="semibold"
          [center]="true">
        </app-text>

        <app-text
          [content]="address"
          size="base"
          color="muted"
          [center]="true">
        </app-text>

        <!-- Iframe de Google Maps -->
        <div class="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            [src]="safeMapUrl"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>        <!-- Botones de acción -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            [href]="directionsUrl"
            target="_blank"
            class="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2">
            <span>📍</span>
            Cómo llegar
          </a>

          <a
            [href]="googleMapsUrl"
            target="_blank"
            class="bg-white border-2 border-gold-600 text-gold-600 hover:bg-gold-50 px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2">
            <span>🗺️</span>
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  `
})
export class LocationMapComponent implements OnInit {
  @Input() locationName: string = '';
  @Input() address: string = '';
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  safeMapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Calculamos la URL una sola vez al inicializar el componente
    const mapUrl = `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&hl=es&z=15&output=embed`;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }

  get directionsUrl(): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
  }

  get googleMapsUrl(): string {
    return `https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`;
  }
}
