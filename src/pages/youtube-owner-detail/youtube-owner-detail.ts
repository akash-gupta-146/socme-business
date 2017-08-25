import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'youtube-owner-detail',
  templateUrl: 'youtube-owner-detail.html',
  styles: [`
  
    .youtube_channel_main {
      text-align: center;
      margin: 0 auto;
    }

    .youtube_channel_main span {
      display: inline-block;
     width: 60px;
      height: 60px;
      border-radius: 50%;
      background-image: url(/assets/icon/ted.jpg);
      background-repeat: no-repeat;
      background-size: contain;
    }

    .youtube_channel_main img {
     width: 30%;
    }

    .youtube_channel_main h4 {
      font-size: 20px;
      margin: 0 auto;
      color: #2196F3;
    }

    .div-social-btn button:nth-child(1) {
      background-color: #3b5998 !important;
    }

    .div-social-btn button:nth-child(2) {
      background-color: #4dc247 !important;
    }

    .div-social-btn button:nth-child(3) {
      background-color: #bb0000 !important;
    }

    .button-ios {
      border-radius: 30px;
      height: 30px;
      margin: 20px auto;
      width: 32%;
      font-size: 11px;
    }

    .content-ios hr {
      height: 2px;
      margin: 0 auto;
    }

   .div_you_channel h4 {
      font-size: 11px;
    font-weight: 700;
    color: #2196F3;
    }

    .div_you_channel i {
      font-size: 10px;
      font-weight: 100;
      color: grey;
      font-style: normal;
    }

    .div_you_channel h5 {
      font-size: 11px;
      font-weight: 700;
      color: #111;
    }

    .div_you_channel img {
      width: 100%;
    }

  `]
})
export class YoutubeOwnerDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
