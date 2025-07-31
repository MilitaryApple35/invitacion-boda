import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent, DividerComponent],
  template: `
    <div class="mb-6">
      <app-title
        [text]="title"
        [size]="titleSize"
        color="gold"
        [elegant]="true">
      </app-title>

      <app-divider color="gold" margin="sm"></app-divider>

      <div class="space-y-2">
        <app-text
          *ngFor="let line of contentLines"
          [content]="line"
          [size]="textSize"
          color="dark"
          [center]="true">
        </app-text>
      </div>
    </div>
  `
})
export class InfoSectionComponent {
  @Input() title: string = '';
  @Input() content: string[] = [];
  @Input() titleSize: 'small' | 'medium' | 'large' | 'xl' = 'medium';
  @Input() textSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';

  get contentLines(): string[] {
    return this.content.filter(line => line.trim() !== '');
  }
}
