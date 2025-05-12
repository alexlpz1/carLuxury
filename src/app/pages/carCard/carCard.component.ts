import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carCard.component.html'
})
export class CarCardComponent {
  @Input() coche: any;
}
