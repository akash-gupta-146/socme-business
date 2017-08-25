import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'individual',
  templateUrl: 'individual.html',
  styles: [`
    
  .div_parent {
    margin: 12px auto;
    border-radius: 2px;
    // border: 1px solid #9E9E9E;
    height: 225px;
    // width: calc(100% - 24px);
    // font-size: 1.4rem;
    // background: #f9fdff;
    // -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    // box-shadow: 0 1px 50px rgba(0, 0, 0, 1.3);
    position: relative;
    text-align: center;
    font-size: 14px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.div_parent .div_child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}

.div_parent .div_child span{
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("/assets/icon/nidhi.jpg");
    margin-top: 35px;
    background-repeat: no-repeat;
}

.div_child h5 {
    font-size: 13px !important;
    font-style: italic !important;
}

ion-col span{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-image: url("/assets/icon/nidhi.jpg");
    margin-top: 5px;
    background-repeat: no-repeat;
}

.star_rating ion-icon {
    color: #2196F3;
    font-size: 20px;
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

.div_company_content {
    text-align: center;
}

.div_social h6 {
    font-size: 11px;
    color: gray;
    display: block;
}
    
  
  
  `]
})
export class IndividualPage {

  constructor(public navCtrl: NavController) {

  }

}
