import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
export interface Plan {
  planName: string;
  price: number;
  features: string[]; // ✅ Add Features Array
}

interface Subscription {
  PlanName: string;
  isExpire: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent implements OnInit {
  plans: Plan[] = [
    {
      planName: 'Forever',
      price: 0,
      features: [
        'Create 1 Digital Business Card',
        '3 Business card scans per Month',
      ],
    },
    {
      planName: 'Essential',
      price: 1,
      features: [
        'Create 3 Digital Business Cards',
        '50 Business card scans per Month',
      ],
    },
    {
      planName: 'Pro Plus',
      price: 2,
      features: [
        'Create 5 Digital Business Cards',
        '100 Business card scans per Month',
      ],
    },
  ];

  CurrentSubscription: Subscription = {
    PlanName: 'Forever', // Default subscription (Modify this as needed)
    isExpire: false,
  };

  constructor() {}

  ngOnInit(): void {}
  getPlanImage(planName: string): string {
    switch (planName) {
      case 'Forever':
        return 'assets/img/illustrations/page-pricing-basic.png';
      case 'Essential':
        return 'assets/img/illustrations/page-pricing-standard.png';
      case 'Pro Plus':
        return 'assets/img/illustrations/page-pricing-enterprise.png';
      default:
        return '';
    }
  }

  getPlanDescription(planName: string): string {
    switch (planName) {
      case 'Forever':
        return 'A simple start for everyone';
      case 'Essential':
        return 'For small to medium businesses';
      case 'Pro Plus':
        return 'Solution for big organizations';
      default:
        return '';
    }
  }
}
