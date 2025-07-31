import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../atoms/title/title.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-couple-header',
  standalone: true,
  imports: [CommonModule, TitleComponent, TextComponent, DividerComponent],
  template: `
    <div class="text-center mb-8">
      <app-text
        content="Con gran alegría los invitamos a celebrar nuestra boda"
        size="lg"
        color="muted"
        [italic]="true"
        [center]="true">
      </app-text>

      <div class="my-6">
        <app-title
          [text]="brideName"
          size="xl"
          color="gold"
          [elegant]="true">
        </app-title>

        <div class="my-4">
          <app-text
            content="&"
            size="xl"
            color="gold"
            [italic]="true"
            [center]="true">
          </app-text>
        </div>

        <app-title
          [text]="groomName"
          size="xl"
          color="gold"
          [elegant]="true">
        </app-title>
      </div>

      <app-divider color="gold" [decorative]="true" margin="lg"></app-divider>
    </div>
  `
})
export class CoupleHeaderComponent {
  @Input() brideName: string = '';
  @Input() groomName: string = '';
}
