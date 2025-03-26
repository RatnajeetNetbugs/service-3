import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,

  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(private renderer: Renderer2) {}

  paymentMethod = 'credit-card';

  setPaymentMethod(method: string) {
    this.paymentMethod = method;
  }
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     const progressContainer = document.querySelector('.progress-container');
  //     if (progressContainer) {
  //       this.renderer.addClass(progressContainer, 'animate');
  //     }
  //   }, 500); // Delay before animation starts
  // }
}
