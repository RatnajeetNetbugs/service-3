import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is Biznfc?',

      answer:
        'Biznfc is a digital business card platform offering smart, eco-friendly networking solutions through NFC-enabled cards, QR codes, and advanced analytics.',
      open: false,
    },
    {
      question: 'How does a Biznfc digital business card work?',
      answer:
        'Biznfc digital cards use NFC (Near Field Communication) and QR technology. Simply tap or scan to instantly share your contact details, social media profiles, and business information.',
      open: false,
    },
    {
      question: 'Why choose Biznfc over traditional business cards?',
      answer:
        'Biznfc offers instant sharing, customizable designs, advanced analytics, and eco-friendly options that reduce plastic waste. Unlike paper cards, Biznfc cards are dynamic and easily updated.',
      open: false,
    },
    {
      question: 'What is BizConnect+?',
      answer:
        'BizConnect+ is our digital business card solution featuring 80+ social links, customizable themes, lead capture forms, and analytics.',
      open: false,
    },
    {
      question: 'What is ReviewBoost?',
      answer:
        'ReviewBoost helps businesses gather genuine Google reviews through NFC and QR-enabled cards, QR standees, and stickers. It boosts online reputation and local SEO.',
      open: false,
    },
    {
      question: 'What is TapSocial?',
      answer:
        'TapSocial allows users to share multiple social media profiles through NFC and QR technology, enhancing social engagement.',
      open: false,
    },
    {
      question: 'What are the pricing plans for Biznfc?',
      answer:
        'Forever Free: Basic features for individual users.' +
        'Essential Plan: ₹3,499/year – Includes multiple digital cards, analytics, and more.' +
        'Pro Plus Plan: ₹6,999/year – Advanced analytics, lead capture forms, and premium support.',
      open: false,
    },
    {
      question: 'Are there any one-time purchases available?',
      answer:
        'Yes, NFC cards and stickers are one-time purchases. However, the QR standee requires a yearly subscription.',
      open: false,
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade your plan anytime from your account dashboard. However, subscription cancellation or refund is not possible once purchased.',
      open: false,
    },
    {
      question: 'Are Biznfc cards compatible with all smartphones?',
      answer:
        'Biznfc NFC cards work with most modern smartphones with NFC capability (iPhone XS or newer, most Android devices). QR codes can be scanned by any smartphone.',
      open: false,
    },
    {
      question: 'Do I need an app to use Biznfc?',
      answer:
        'No app is needed. Simply tap the NFC card or scan the QR code to access and share your digital business card.',
      open: false,
    },
    {
      question: 'Can I update my digital business card details?',
      answer:
        'Yes, your digital card can be edited anytime from your dashboard, and changes update instantly.',
      open: false,
    },
    {
      question: 'What kind of analytics does Biznfc provide?',
      answer:
        'Biznfc offers detailed analytics, including card views, form submissions, feedback responses, ratings, and traffic source tracking.',
      open: false,
    },
    {
      question: 'How can analytics help my business?',
      answer:
        'Analytics provide insights into who views your card, how they engage, and where your traffic comes from, helping you optimize your networking strategy.',
      open: false,
    },
    {
      question: 'How can I order Biznfc products?',
      answer:
        'Place an order directly through our website. Customize your product, select your plan, and complete your purchase.',
      open: false,
    },
    {
      question: 'What is the shipping time for Biznfc products?',
      answer:
        'Products typically ship within 7-10 business days after order confirmation.',
      open: false,
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Currently, we ship within India. For international orders, please contact our support team.',
      open: false,
    },
    {
      question: 'How can I contact Biznfc support?',
      answer:
        'You can reach us through email, WhatsApp, or the contact form on our website. Our support team is here to help.',
      open: false,
    },
    {
      question: ' Can I request a demo before purchasing?',
      answer:
        'Yes! You can schedule a demo through our website to see how Biznfc works for you.',
      open: false,
    },
    {
      question: ' Can I cancel or get a refund for my subscription?',
      answer:
        'No, subscription cancellation or refunds are not possible once a purchase is made. Please choose your plan carefully.',
      open: false,
    },
  ];

  toggleFAQ(faq: any) {
    faq.open = !faq.open;
  }
}
