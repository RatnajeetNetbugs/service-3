import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartComponent } from '../../cart/cart/cart.component';
import { ThemeServiceService } from '../../../services/theme-service.service';

@Component({
  selector: 'app-helpcenter',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './helpcenter.component.html',
  styleUrl: './helpcenter.component.css',
})
export class HelpcenterComponent implements OnInit {
  selectedTheme: string = 'light';
  articles = [
    {
      title: 'Getting Started',
      description:
        'Whether you’re new or you’re a power user, this article will...',
      icon: 'bi-rocket',
    },
    {
      title: 'First Steps',
      description: 'Are you a new customer wondering how to get started?',
      icon: 'bi-gift',
    },
    {
      title: 'Add External Content',
      description:
        'This article will show you how to expand the functionality of...',
      icon: 'bi-file-earmark-text',
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
}
