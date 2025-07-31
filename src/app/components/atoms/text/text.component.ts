import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [ngClass]="textClasses">
      {{ content }}
    </p>
  `
})
export class TextComponent {
  @Input() content: string = '';
  @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() color: 'gold' | 'dark' | 'light' | 'muted' = 'dark';
  @Input() weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';
  @Input() italic: boolean = false;
  @Input() center: boolean = false;

  get textClasses(): string {
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };

    const colorClasses = {
      gold: 'text-gold-600',
      dark: 'text-gray-800',
      light: 'text-white',
      muted: 'text-gray-600'
    };

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    };

    const italicClass = this.italic ? 'italic' : '';
    const centerClass = this.center ? 'text-center' : '';

    return `${sizeClasses[this.size]} ${colorClasses[this.color]} ${weightClasses[this.weight]} ${italicClass} ${centerClass} font-serif`.trim();
  }
}
