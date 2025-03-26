import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeServiceService } from '../../../services/theme-service.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent implements OnInit {
  selectedTheme: string = 'light';
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
