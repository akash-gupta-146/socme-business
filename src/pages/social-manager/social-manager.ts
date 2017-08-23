import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tab1 } from './tab1-page';
import { Tab2 } from './tab2-page';
@Component({
  selector: 'social-manager',
  templateUrl: 'social-manager.html'
})
export class SocialManagerPage {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }

}
