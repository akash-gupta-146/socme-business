import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'rating-view',
  templateUrl: 'rating-view.html',
  styles: [`

    .apply_color {
      background-color: #b2dff4 !important;
    }
    
  `]
})
export class RatingViewPage {

  constructor(public navCtrl: NavController) {

  }

}
