import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'youtube-owner-detail',
  templateUrl: 'youtube-owner-detail.html',
  styles: [`
    .apply_color {
      background-color: #b2dff4 !important;
    }
    .swiper_color {
  color: #007aff !important;
}
  `]
})
export class YoutubeOwnerDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
