import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'messages',
  templateUrl: 'messages.html',
  styles: [`

    ion-content {
      background-color: #b2dff4 !important;
    }
    .div_social span {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-size: contain;
      margin: 10px 14px;
      position: relative;
    }
    .div_social span:nth-child(1) {
      background-image: url(/assets/icon/4hangouts.png);
      color: #4c9c3e;
    }
    .div_social span:nth-child(2) {
      background-image: url(/assets/icon/2skype.png);
      color: #24aded;
    }
    .div_social span:nth-child(3) {
      background-image: url(/assets/icon/3whatsapp.png);
      color: #22951e;
    }
    .div_social span:nth-child(4) {
      background-image: url(/assets/icon/messenger.png);
      color: #157dfc;
    }
    .div_social span:nth-child(5) {
      background-image: url(/assets/icon/1viber.png);
      color: #73509a;
    }

    .div_social span h6 {
      font-size: 12px;
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  `]
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {

  }

}
