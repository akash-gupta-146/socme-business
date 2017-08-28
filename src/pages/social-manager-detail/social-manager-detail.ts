import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'social-manager-detail',
  templateUrl: 'social-manager-detail.html',
  styles: [`


  ion-col img{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 5px;
    background-repeat: no-repeat;
    margin-top:10px;
  }
  
  .div_social {
    display: inline-flex;
  }
  
  .div_social ion-icon {
    margin-right: 15px;
    text-align: center;
  }
  
  .div_social ion-icon:nth-child(1) {
    color: #3b5998;
  }
  
  .div_social ion-icon:nth-child(2) {
    color: #00aced;
  }
  
  .div_social ion-icon:nth-child(3) {
    color: #bb0000;
  }
  
  .div_social h6 {
    font-size: 11px;
    color: gray;
    display: block;
  }

  `]
})
export class SocialManagerDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
