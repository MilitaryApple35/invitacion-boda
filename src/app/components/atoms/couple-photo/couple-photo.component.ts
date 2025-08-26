import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-couple-photo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center mb-8">
      <div class="relative">
        <!-- Foto circular -->
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold-300 shadow-lg bg-white">
          <img
            [src]="photoSrc"
            [alt]="altText"
            class="w-full h-full object-cover">
        </div>

        <!-- Decoración dorada alrededor -->
        <div class="absolute -inset-2 rounded-full border-2 border-gold-200 opacity-50"></div>
        <div class="absolute -inset-4 rounded-full border border-gold-100 opacity-30"></div>

        <!-- Corazones decorativos -->
        <div class="absolute -top-2 -right-2 text-2xl">💕</div>
        <div class="absolute -bottom-2 -left-2 text-2xl">💕</div>
      </div>
    </div>
  `
})
export class CouplePhotoComponent {
  @Input() photoSrc: string = '';
  @Input() altText: string = 'Foto de los novios';
}
