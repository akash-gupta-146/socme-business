import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'company-detail',
  templateUrl: 'company-detail.html',
  styles: [
    `
    ion-navbar{
      background: url('/assets/header.png');
      height: 237px;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
    }
    .close-btn{
    top: 25px !important;
    position: absolute !important;
  }
  ion-fab[top] {
    top: 0px;
}
  ion-icon.business-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 6em;
    color: #a4c639;
  }

    .div_top_headText {
      position: absolute;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
    }

    .div_top_headText h5 {
      font-size: 20px;
      margin: 0;
      padding-top: 120px;
    }

    .div_top_headText h6 {
      font-size: 12px;
      margin: 5px 0px;
     font-style: italic;
    }

    .div_main_text {
      text-align: left;
      padding: 0px 25px;
    }

    .div_main_text h4 {
      margin: 0;
      padding-top: 25px;
      font-weight: 600;
      color: #a4c639;
    }

    .div_main_text i {
      font-style: normal;
      color: #624b4b;
    }

    .div_main_text ul {
      margin: 0;
      padding: 0;
    }

    .div_main_text ul li {
      list-style-type: none;
      margin: 20px 0px;
      position: relative;
    }

    .div_main_text ul li a {
      text-decoration: none;
      color: #111;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      padding-left: 5px;
    }

    .div_main_text ul li h6 {
      font-weight: 100;
      font-size: 13px;
      margin: 0;
      padding-top: 3px;
      padding-left: 20px;
    }

    .div_main_text ul li span {
      position: absolute;
      top: 0px;
      right: 25px;
      display: inline-block;
      color: cadetblue;
    }

.hexagon1 {
  position: relative;
  width: 10px; 
  height: 5.77px;
  background-color: #cc1a89;
  margin: 2.89px 0;
  display: inline-block;
}

.hexagon1:before,
.hexagon1:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.hexagon1:before {
  bottom: 100%;
  border-bottom: 2.89px solid #cc1a89;
}

.hexagon1:after {
  top: 100%;
  width: 0;
  border-top: 2.89px solid #cc1a89;
}

.hexagon2 {
  position: relative;
  width: 10px; 
  height: 5.77px;
  background-color: #ff8d1d;
  margin: 2.89px 0;
  display: inline-block;  
}

.hexagon2:before,
.hexagon2:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.hexagon2:before {
  bottom: 100%;
  border-bottom: 2.89px solid #ff8d1d;
}

.hexagon2:after {
  top: 100%;
  width: 0;
  border-top: 2.89px solid #ff8d1d;
}

.hexagon3 {
  position: relative;
  width: 10px; 
  height: 5.77px;
  background-color: #54c046;
  margin: 2.89px 0;
  display: inline-block;
}

.hexagon3:before,
.hexagon3:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.hexagon3:before {
  bottom: 100%;
  border-bottom: 2.89px solid #54c046;
}

.hexagon3:after {
  top: 100%;
  width: 0;
  border-top: 2.89px solid #54c046;
}

.hexagon4 {
  position: relative;
  width: 10px; 
  height: 5.77px;
  background-color: #586ef1;
  margin: 2.89px 0;
  display: inline-block;
}

.hexagon4:before,
.hexagon4:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.hexagon4:before {
  bottom: 100%;
  border-bottom: 2.89px solid #586ef1;
}

.hexagon4:after {
  top: 100%;
  width: 0;
  border-top: 2.89px solid #586ef1;
}

ion-content {
    background-color: hsla(25, 18%, 99%, 0.95) !important;
}

 .toolbar-background-ios{
   border-bottom: 0 !important;
 }
.toolbar-background .toolbar-background-ios{
  border-bottom:0px !important;
}
    `]
})
export class CompanyDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
