import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gold-100 p-6 rounded-lg border-2 border-gold-300 mb-6">
      <h3 class="text-2xl font-serif font-bold text-gold-700 text-center mb-4">
        ¡Faltan solo!
      </h3>

      <div class="grid grid-cols-4 gap-2 text-center">
        <div class="bg-white p-3 rounded-lg shadow">
          <div class="text-2xl font-bold text-gold-600">{{ timeLeft.days }}</div>
          <div class="text-xs text-gray-600 font-medium">
            {{ timeLeft.days === 1 ? 'Día' : 'Días' }}
          </div>
        </div>

        <div class="bg-white p-3 rounded-lg shadow">
          <div class="text-2xl font-bold text-gold-600">{{ timeLeft.hours }}</div>
          <div class="text-xs text-gray-600 font-medium">
            {{ timeLeft.hours === 1 ? 'Hora' : 'Horas' }}
          </div>
        </div>

        <div class="bg-white p-3 rounded-lg shadow">
          <div class="text-2xl font-bold text-gold-600">{{ timeLeft.minutes }}</div>
          <div class="text-xs text-gray-600 font-medium">
            {{ timeLeft.minutes === 1 ? 'Minuto' : 'Minutos' }}
          </div>
        </div>

        <div class="bg-white p-3 rounded-lg shadow">
          <div class="text-2xl font-bold text-gold-600">{{ timeLeft.seconds }}</div>
          <div class="text-xs text-gray-600 font-medium">
            {{ timeLeft.seconds === 1 ? 'Segundo' : 'Segundos' }}
          </div>
        </div>
      </div>

      <div *ngIf="isWeddingDay" class="text-center mt-4">
        <p class="text-lg font-serif font-bold text-gold-700">
          ¡Hoy es el gran día! 🎉
        </p>
      </div>
    </div>
  `
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() weddingDate!: Date;

  timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  isWeddingDay = false;
  private subscription?: Subscription;

  ngOnInit() {
    this.updateCountdown();
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const weddingTime = this.weddingDate.getTime();
    const difference = weddingTime - now;

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
      this.isWeddingDay = false;
    } else {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.isWeddingDay = true;
    }
  }
}
