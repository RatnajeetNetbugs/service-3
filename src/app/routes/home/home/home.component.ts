import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PricingComponent } from '../../pricing/pricing/pricing.component';
import { CartComponent } from '../../cart/cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PricingComponent, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  slides = [
    {
      image: 'img/tabs/tab-1.png',
      title: 'First Slide',
      description: 'This is the first slide description.',
    },
    {
      image: 'img/tabs/tab-2.png',
      title: 'Second Slide',
      description: 'This is the second slide description.',
    },
    {
      image: 'img/tabs/tab-3.png',
      title: 'Third Slide',
      description: 'This is the third slide description.',
    },
  ];
}
