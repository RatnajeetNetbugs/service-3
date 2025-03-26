import { Routes } from '@angular/router';
import { LayoutComponent } from './routes/shared/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./routes/home/home.routes').then((m) => m.routes),
      },
      {
        path: 'features',
        loadChildren: () =>
          import('./routes/features/features.routes').then((m) => m.routes),
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./routes/faq/faq.routes').then((m) => m.routes),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./routes/contact/contact.routes').then((m) => m.routes),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./routes/pricing/pricing.routes').then((m) => m.routes),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./routes/checkout/checkout.routes').then((m) => m.routes),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./routes/payment/payment.routes').then((m) => m.routes),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('./routes/helpcenter/helpcenter.routes').then((m) => m.routes),
      },
      {
        path: 'policy',
        loadChildren: () =>
          import('./routes/privacy-policy/privacy-policy.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('./routes/terms/terms.routes').then((m) => m.routes),
      },
    ],
  },
];
