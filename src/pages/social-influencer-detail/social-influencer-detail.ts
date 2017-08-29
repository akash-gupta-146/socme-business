import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'social-influencer-detail',
  templateUrl: 'social-influencer-detail.html',
  styles: [`
  .apply_color {
      background-color: #b2dff4 !important;
    }

    .swiper_color {
  color: #007aff !important;
}


  `]
})
export class SocialInfluencerDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
