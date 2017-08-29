import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'rate-form',
  templateUrl: 'rate-form.html',
  styles: [`

  .apply_color {
      background-color: #b2dff4 !important;
    }

    .swiper_color {
  color: #007aff !important;
}

.star {
	color: #FF9800 !important;
}

.btn22 {
    background: #007aff !important;
    color: #fff;
}
  .div_parent{
    height: 150px !important;
  }
  h5{
        margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .div_parent .div_child span{
    background-size:cover;
    background-image: url("data:image/jpeg;base64,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") !important;
}
  .card_heading{
    font-size:1.4rem;
  }
  ion-icon{
        font-size: 1.7em;
  }
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
export class RateFormPage {

  constructor(public navCtrl: NavController) {

  }

}
