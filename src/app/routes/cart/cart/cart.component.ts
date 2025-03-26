import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeServiceService } from '../../../services/theme-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  selectedTheme: string = 'light';

  isCartOpen = false;
  cartItems = [
    {
      id: 1,
      name: 'Product A',
      price: 20,
      imageUrl: 'img/about.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
    {
      id: 7,
      name: 'Product last',
      price: 35,
      imageUrl: 'gateway.png',
      quantity: 6,
    },
  ];

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeServiceService
  ) {}
  ngOnInit() {
    this.themeService.theme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
    // this.selectedTheme = localStorage.getItem('theme') || 'light'; // Fetch stored theme
    // console.log('Theme Loaded:', this.selectedTheme); // Debugging
    // this.applyTheme(this.selectedTheme);
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
  private applyTheme(theme: string): void {
    // Remove existing theme classes
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.removeClass(document.body, 'light-theme');

    // Add new theme class
    this.renderer.addClass(
      document.body,
      theme === 'dark' ? 'dark-theme' : 'light-theme'
    );
  }
  getSubtotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
