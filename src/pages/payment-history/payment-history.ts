import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'payment-history',
  templateUrl: 'payment-history.html',
  styles: [`
    .div-pay-history {
      position: relative;
      width: 100%;
      height: 150px;
      background-color: #24aded;
    }
    .div-pay-history span {
      position: absolute;
    display: inline-block;
    background-image: url(/assets/icon/card.png);
    background-repeat: no-repeat;
    background-size: 75% 100%;
    top: 133px;
    left: 245px;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 320px;
  }

  .div-pay-balance {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .div-pay-balance h3 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 200;
    color: #7b2506;
    font-family: -webkit-pictograph;
  }

   .div-pay-balance h1 {
    margin: 0 auto;
    padding: 0;
    font-size: 35px;
    font-family: serif;
    color: #3f6e23;
  }

  ion-content {
    background-color: #e3f2fd !important;
  }

  ion-grid {
    position: absolute;
    top: 60%;
  }

  .div-pay {
    position: absolute;
    top: 55px;
    right: 24px;
    z-index: 11;
    display: block;
    font-size: 10px;
    font-style: initial;
    color: #7b2506;
    font-weight: 900;
    text-align: center;
  }

  .div-pay span {
    float: right;
    display: inline-block;
    font-size: 18px;
    font-family: monospace;
    color: #24aded;
  }

  .div-pay1 {
    position: absolute;
    top: 100px;
    right: 24px;
    z-index: 11;
    display: block;
    font-size: 10px;
    font-style: initial;
    color: #7b2506;
    font-weight: 900;
    text-align: center;
  }

  .div-pay1 span {
    float: right;
    display: inline-block;
    font-size: 18px;
    font-family: monospace;
    color: #24aded;
  }

  .div-pay2 {
    position: absolute;
    top: 58px;
    right: 24px;
    z-index: 11;
    display: block;
    font-size: 10px;
    font-style: initial;
    color: #7b2506;
    font-weight: 900;
    text-align: center;
  }

  .div-pay2 span {
    float: right;
    display: inline-block;
    font-size: 18px;
    font-family: monospace;
    color: #24aded;
  }

  .div-pay3 {
    position: absolute;
    top: 100px;
    right: 24px;
    z-index: 11;
    display: block;
    font-size: 10px;
    font-style: initial;
    color: #7b2506;
    font-weight: 900;
    text-align: center;
  }

  .div-pay3 span {
    float: right;
    display: inline-block;
    font-size: 18px;
    font-family: monospace;
    color: #24aded;
  }

  ion-icon {
    color: #24aded;
    font-size: 1.2em;
    padding-right: 7px;
  }

  
  `]
})
export class PaymentHistoryPage {

  constructor(public navCtrl: NavController) {

  }

}
