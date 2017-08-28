import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'messages',
  templateUrl: 'messages.html',
  styles: [`

  .button {
    border: none;
    background: #00B8D4;
    color: #fff;
    padding: 10px; 
    &:focus {
      border: 0px; 
      outline: none;
    }
    &:active {
      background: #00ACC1;
    }
  }
  
  #chat-section {
    padding-top: 5px; 
  }
  
  #input-bar {
    border-top: 1px solid #00838F;
    position: absolute;
    bottom: 0px; 
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: space-between;
  }
  
  #mobile {
    margin: auto;
    position: relative;
  }
  
  #notification-bar {
    background: #00838F;
    text-align: right;
    height: 20px; 
    color: #fff;
    padding: 2px 5px 0px 5px;
  }
  #sendText {
    flex: 2;
    border: 0px; 
    font-size: 16px;
    padding: 10px;  
    overflow: hidden;
    resize: none;
     background: #FAFAFA;
    &:focus {
      border: 0px; 
      outline: none;
    }
  }
  
  #title-bar {
    background: #00B8D4;
    height: 50px; 
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 16px;
  }
  
  .chat {
    display: flex;
    margin: 10px auto 25px;
  }
  
  .chat-face > img {
    background: #80DEEA;
    height: 50px;
    width: 50px; 
    border-radius: 50%;
  }

  img.chat-face {
    margin-right: 15px;
  }

  img.face2 {
    margin-left: 15px;
    margin-right: 7px;
    margin-top: 25px;
  }

  // .face2 {
  //   height: 50px; 
  //   width: 50px;
  // }
  .chat-body {
    background: #E0F7FA;
    flex: 2;
    padding: 5px; 
    text-align: left;
    font-size: 0.9em;
    
    .time {
      color: #616161;
      display: block;
      align-items: flex-end;
      text-align: right;
      font-size: 0.7em;
    }
  }
  .body2 {
    background: #FBE9E7;
  }
  .chat-space {
    width: 15px; 
  }
  
  /* colors */
  .green {
    color: #8BC34A;
  }
  .orange {
    color: #FF9800;
  }
  
  .pad-right{
    padding-right: 10px;
  }

  .arrow_box {
	position: relative;
	background: #8abfb1;
	border: 2px solid #658aba;
}
.arrow_box:after, .arrow_box:before {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box:after {
	border-color: rgba(138, 191, 177, 0);
	border-right-color: #8abfb1;
	border-width: 10px;
	margin-top: -10px;
}
.arrow_box:before {
	border-color: rgba(101, 138, 186, 0);
	border-right-color: #658aba;
	border-width: 14px;
	margin-top: -14px;
}

.arrow_box2 {
	position: relative;
	background: #5096bf;
	border: 2px solid #6a736d;
}
.arrow_box2:after, .arrow_box2:before {
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box2:after {
	border-color: rgba(80, 150, 191, 0);
	border-left-color: #5096bf;
	border-width: 10px;
	margin-top: -10px;
}
.arrow_box2:before {
	border-color: rgba(106, 115, 109, 0);
	border-left-color: #6a736d;
	border-width: 13px;
	margin-top: -13px;
}

.time1 {
  display: inline-block;
    position: absolute;
    top: 52px;
    right: 5px;
    font-size: 12px;
    font-weight: 600;
}

.time2 {
  display: inline-block;
    position: absolute;
    top: 109px;
    left: 0px;
    font-size: 12px;
    font-weight: 600;
}

.time3 {
  display: inline-block;
    position: absolute;
    top: 95px;
    left: 0px;
    font-size: 12px;
    font-weight: 600;
}

.time4 {
  display: inline-block;
    position: absolute;
    top: 94px;
    left: 0px;
    font-size: 12px;
    font-weight: 600;
}

ion-icon {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
}

.button1 {
    border: none;
    background: #00B8D4;
    color: #e6ecde;
    padding: 20px;
}
  `]
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {

  }

}
