import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'youtube-owner',
  templateUrl: 'youtube-owner.html',
  styles: [`
  
    .div_youtube img {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 100px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .div_youtube span a {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url("/assets/icon/6.png");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .div_my_you {
      position: absolute;
      top: 11px;
      left: 130px;
    }

    .div_my_you i {
      display: inline-block;
      max-width: 60px;
      width: 100%;
      height: 20px;
      background-image: url("/assets/icon/sub.png");
      background-size: contain;
      background-repeat: no-repeat;
      text-align: left;
    }

    .div_my_you h6 {
      font-size: 12px;
      text-align: left;
      color: red;
    }

    .div_my_you h4 {
      font-weight: 800;
    }

  `]
})
export class YoutubeOwnerPage {

  constructor(public navCtrl: NavController) {

  }

}
