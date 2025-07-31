import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="dividerClasses">
      <div *ngIf="decorative" class="flex items-center justify-center">
        <div class="w-8 h-0.5 bg-current"></div>
        <div class="mx-2 text-xl">✦</div>
        <div class="w-8 h-0.5 bg-current"></div>
      </div>
      <div *ngIf="!decorative" class="h-0.5 bg-current w-full"></div>
    </div>
  `
})
export class DividerComponent {
  @Input() color: 'gold' | 'dark' | 'light' = 'gold';
  @Input() decorative: boolean = true;
  @Input() margin: 'sm' | 'md' | 'lg' = 'md';

  get dividerClasses(): string {
    const colorClasses = {
      gold: 'text-gold-600',
      dark: 'text-gray-800',
      light: 'text-white'
    };

    const marginClasses = {
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-8'
    };

    return `${colorClasses[this.color]} ${marginClasses[this.margin]} flex justify-center items-center`;
  }
}
