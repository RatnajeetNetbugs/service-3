import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Dropdown } from 'bootstrap';
import { CartComponent } from '../../cart/cart/cart.component';
import { ThemeServiceService } from '../../../services/theme-service.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterLink, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private themeService: ThemeServiceService
  ) {}

  @ViewChild('themeDropdownBtn', { static: false })
  themeDropdownBtn!: ElementRef;
  @ViewChild('mobileThemeDropdownBtn', { static: false })
  mobileThemeDropdownBtn!: ElementRef;

  private dropdownInstance!: Dropdown;
  private mobileDropdownInstance!: Dropdown;

  selectedTheme: string = localStorage.getItem('theme') || 'light'; // Default theme

  ngAfterViewInit() {
    this.dropdownInstance = new Dropdown(this.themeDropdownBtn.nativeElement);
    this.mobileDropdownInstance = new Dropdown(
      this.mobileThemeDropdownBtn.nativeElement
    );

    this.applyTheme(this.selectedTheme); // Apply the stored theme on load
  }

  toggleDropdown() {
    this.dropdownInstance.toggle();
  }

  toggleMobileDropdown() {
    this.mobileDropdownInstance.toggle();
  }

  get themeTextColor(): string {
    return this.selectedTheme === 'dark' ? 'text-white' : 'text-dark';
  }

  setTheme(theme: string): void {
    this.selectedTheme = theme;
    localStorage.setItem('theme', theme); // Save theme preference
    this.themeService.setTheme(theme);

    this.applyTheme(theme);
  }

  private applyTheme(theme: string): void {
    // Remove previous theme classes
    this.renderer.removeClass(document.body, 'bg-dark');
    this.renderer.removeClass(document.body, 'text-white');
    this.renderer.removeClass(document.body, 'bg-light');
    this.renderer.removeClass(document.body, 'text-dark');

    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'bg-dark');
      this.renderer.addClass(document.body, 'text-white');
    } else {
      this.renderer.addClass(document.body, 'bg-light');
      this.renderer.addClass(document.body, 'text-dark');
    }
  }

  get themeIcon(): string {
    return this.selectedTheme === 'dark'
      ? 'bi-moon-fill'
      : this.selectedTheme === 'light'
      ? 'bi-sun-fill'
      : 'bi-laptop';
  }
}
