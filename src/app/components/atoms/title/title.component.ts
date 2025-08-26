import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 [ngClass]="titleClasses">
      {{ text }}
    </h1>
  `
})
export class TitleComponent {
  @Input() text: string = '';
  @Input() size: 'small' | 'medium' | 'large' | 'xl' = 'medium';
  @Input() color: 'gold' | 'dark' | 'light' = 'dark';
  @Input() elegant: boolean = false;
  @Input() script: boolean = false;

  get titleClasses(): string {
    const sizeClasses = {
      small: 'text-lg',
      medium: 'text-2xl',
      large: 'text-4xl',
      xl: 'text-6xl'
    };

    const colorClasses = {
      gold: 'text-gold-600',
      dark: 'text-gray-800',
      light: 'text-white'
    };

    let fontClass = 'font-sans';
    if (this.script) {
      fontClass = 'font-script';
    } else if (this.elegant) {
      fontClass = 'font-serif';
    }

    const weightClass = this.script ? 'font-normal' : 'font-bold';

    return `${sizeClasses[this.size]} ${colorClasses[this.color]} ${fontClass} text-center ${weightClass}`;
  }
}
