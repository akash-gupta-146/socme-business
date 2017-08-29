import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'request',
  templateUrl: 'request.html',
  styles: [`
    .apply_color {
      background-color: #b2dff4 !important;
    }

    .swiper_color {
  color: #007aff !important;
}
  `]
})
export class RequestPage {

  constructor(public navCtrl: NavController) {

  }

}
