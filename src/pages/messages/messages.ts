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
    font-size: .9em;
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
    padding: 5px 10px; 
  }
  
  .chat-face > img {
    background: #80DEEA;
    height: 50px;
    width: 50px; 
  }
  .face2 {
    background: #FF7043;
    height: 50px; 
    width: 50px;
  }
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
    width: 30px; 
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

  `]
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {

  }

}
