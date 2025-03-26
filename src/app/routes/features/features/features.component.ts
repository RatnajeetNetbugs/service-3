import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi bi-share-fill',
      title: 'Instant Sharing via NFC & QR',
      description:
        'Tap or scan to share contact details instantly — no app required.',
    },
    {
      icon: 'bi bi-pencil-fill',
      title: ' Editable Anytime, No Reprinting',
      description:
        'Update your business card details in real time without reprinting costs.',
    },
    {
      icon: 'bi bi-camera-fill',
      title: 'Scan Business Cards with Biznfc AI',
      description:
        'Upload business card images to extract details, create clickable links, and save contacts effortlessly.',
    },
    {
      icon: 'bi bi-palette-fill',
      title: ' Custom Branding & Themes',
      description:
        'Personalize your card with custom colors, logos, and branding to represent your business.',
    },
    {
      icon: 'bi bi-window-stack',
      title: 'Multiple Digital Cards',
      description:
        'Create multiple digital cards for different roles or purposes under one account.',
    },
    {
      icon: 'bi bi-image-fill',
      title: 'Gallery & Media Integration',
      description:
        'Showcase your work with a gallery of images, YouTube videos, and PDFs.',
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: ' Advanced Analytics & Engagement Tracking',
      description:
        'Track views, shares, saves, and interactions for detailed insights.',
    },
    {
      icon: 'bi bi-star-half',
      title: 'Feedback & Review Forms',
      description:
        'Create feedback and review forms to gather responses and analyze customer satisfaction.',
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Networking & Lead Capture',
      description:
        'Capture leads instantly with customizable forms, share history, and CRM integration.',
    },

    {
      icon: 'bi bi-person-badge-fill',
      title: 'Virtual Event Cards',
      description:
        'Create digital backgrounds and email signatures to enhance virtual meetings.',
    },
    {
      icon: 'bi bi-pc-display',
      title: 'Multi-Device Compatibility',
      description:
        'Works seamlessly on NFC-enabled smartphones, tablets, and devices with QR scanning.',
    },
    {
      icon: 'bi bi-globe-central-south-asia',
      title: 'Eco-Friendly & Sustainable',
      description:
        'Minimize paper waste and contribute to a sustainable future with our EcoConnect range.',
    },
  ];
}
