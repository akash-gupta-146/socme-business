import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'individual',
  templateUrl: 'individual.html',
  styles: [`

    .animated { 
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both; 
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
}

 

@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes bounceInDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -moz-transform: translateY(30px);
  }

  80% {
    -moz-transform: translateY(-10px);
  }

  100% {
    -moz-transform: translateY(0);
  }
}
@-o-keyframes bounceInDown {
  0% {
    opacity: 0;
    -o-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -o-transform: translateY(30px);
  }

  80% {
    -o-transform: translateY(-10px);
  }

  100% {
    -o-transform: translateY(0);
  }
}
@keyframes bounceInDown {
  0% {
    opacity: 0;
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    transform: translateY(30px);
  }

  80% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
.bounceInDown {
  -webkit-animation-name: bounceInDown;
  -moz-animation-name: bounceInDown;
  -o-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

    .div_pay_head {
      background-color: #fff;
      padding: 80px 0px;
      text-align: center;
    }

    .div_pay_head img {
      max-width: 100%;
      height: auto;
      width: 40%;
    }

    input {
      margin-top: 0px !important;
      font-size: 13px;
    }

    ion-item {
      border-radius: 10px !important;
      background-color: #fff !important;
      box-shadow: inset 0 -1px 2px grey;
      margin: 0 auto;
      width: 100%;
    }

    ion-list ion-item ion-icon {
      color: #00447b;
    }
  `]
})
export class IndividualPage {

  constructor(public navCtrl: NavController) {

  }

}
