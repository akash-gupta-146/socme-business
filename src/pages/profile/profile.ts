import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html',
  styles: [`

  .apply_color {
      background-color: #b2dff4 !important;
    }

    .swiper_color {
  color: #007aff !important;
}

.btn44 {
  background: #007aff !important;
  color: #fff;
}
    .profileDisplay{
      background:blue;
      border-radius:50%;
      width:100px; height:100px;
      display: block;
      margin: auto;
    }
    .owner{
      background:url('https://www.thefamouspeople.com/profiles/images/sundar-pichai-1.jpg');
      background-size:cover;
    }
    .company{
      background:url('https://www.infinitybht.com/wp-content/uploads/2017/07/Google_-G-_Logo.svg.png');
      background-size:cover;
    }
  `]
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

}
