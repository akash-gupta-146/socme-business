import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'premium',
  templateUrl: 'premium.html',
  styles: [`
  .sales-header{
    background:#756ddd;
    color:white;
  }
  .business-header{
    background:#0091ca;
    color:white;
  }
  .career-header{
    background:#2f7b15;
    color:white;
  }
  `]
})
export class PremiumPage {

  constructor(public navCtrl: NavController) {

  }

}
