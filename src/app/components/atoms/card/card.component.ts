import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="cardClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {
  @Input() padding: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() shadow: boolean = true;
  @Input() rounded: boolean = true;
  @Input() background: 'white' | 'cream' | 'transparent' = 'white';

  get cardClasses(): string {
    const paddingClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12'
    };

    const backgroundClasses = {
      white: 'bg-white',
      cream: 'bg-gold-50',
      transparent: 'bg-transparent'
    };

    const shadowClass = this.shadow ? 'shadow-lg' : '';
    const roundedClass = this.rounded ? 'rounded-lg' : '';

    return `${paddingClasses[this.padding]} ${backgroundClasses[this.background]} ${shadowClass} ${roundedClass}`.trim();
  }
}
