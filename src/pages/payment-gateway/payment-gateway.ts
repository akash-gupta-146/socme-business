import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'payment-gateway',
  templateUrl: 'payment-gateway.html',
  styles: [
    `
    ion-navbar{
      background: url('/assets/header.png');
      height: 270px;
      background-size: cover;
    }
    .close-btn{
          top: 25px !important;
    position: absolute !important;
    }
    `
  ]
})
export class PaymentGatewayPage {

  constructor(public navCtrl: NavController) {

  }

}
