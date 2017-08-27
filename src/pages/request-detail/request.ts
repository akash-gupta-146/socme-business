import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'request',
  templateUrl: 'request.html',
  styles:[`
  
      .social-influ-main {
        text-align: center;
      }
  
      .social-influ-main .div-social-influ span {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-image: url("/assets/icon/nidhi.jpg");
        margin: 10px auto 5px;
      }
  
      .social-influ-main .div-social-influ h4 {
        font-size: 25px;
        color: #2196F3;
        margin: 0 auto;
        font-family: serif;
      }
  
      .social-influ-main .div-social-influ h6 {
        font-size: 15px;
        color: #4CAF50;
        margin: 0 auto;
        font-family: serif;
        font-style: italic;
      }
  
      .social-influ-main .div-social-influ .star-rating {
        color: red;
        margin-top: 10px;
      }
  
      .button-ios {
        border-radius: 30px;
        height: 30px;
        margin: 20px auto;
        width: 32%;
        font-size: 11px;
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
  
      .div-company-list2 span {
        font-size: 18px !important;
        font-weight: 700 !important;
        color: brown !important;
      }
  
      .div-company-list2 i {
        font-size: 13px !important;
        font-weight: 200 !important;
        color: grey !important;
        float: right;
      }
  `]
})
export class RequestDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
