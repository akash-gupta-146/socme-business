import { Component } from '@angular/core';

@Component({
  template: `
  <ion-content>
   <ion-list>
  <div class="div_header" color="light">
    Connected Influencers
  </div>
  <ion-item>
    <ion-avatar item-start>
      <div></div>
      <ion-badge item-end color="logo">355k</ion-badge>
    </ion-avatar>
    <h2 color="logo1">Donell</h2>
    <p color="grey">Alpha is our New app which breathe excellence.Our App Breathe Excellence. Client Servicing is our USP.</p>
  </ion-item>

  <ion-item>
    <ion-avatar item-start>
      <ion-icon name="logo-angular"></ion-icon>
      <ion-badge item-end color="danger">25</ion-badge>
    </ion-avatar>
    <h2 class="ang">Monisha Swamy</h2>
    <p color="grey">Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling.</p>
  </ion-item>

  <ion-item>
    <ion-avatar item-start>
      <ion-icon name="ionic" color="ionic"></ion-icon>
      <ion-badge item-end color="ionic">1732k</ion-badge>
    </ion-avatar>
    <h2 class="ionic">Bob Merley</h2>
    <p>Ionic apps are created and developed primarily through the Ionic command line utility (the “CLI”), and use Cordova to build and deploy as a native app. This means we need to install a few utilities to get developing.</p>
  </ion-item>

  <ion-item>
    <ion-avatar item-start>
      <ion-icon name="logo-android" color="android"></ion-icon>
      <ion-badge item-end color="android">12k</ion-badge>
    </ion-avatar>
    <h2 class="android">Peter Ben</h2>
    <p>Initially developed by Android Inc., which Google bought in 2005, Android was unveiled in 2007, along with the founding of the Open Handset Alliance – a consortium of hardware, software, and telecommunication companies devoted to advancing </p>
  </ion-item>

  <ion-item>
    <ion-avatar item-start>
      <ion-icon name="logo-dribbble" color="dribble"></ion-icon>
      <ion-badge item-end color="dribble">110</ion-badge>
    </ion-avatar>
    <h2 class="ionic">Den Mark</h2>
    <p>Dribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities. They are self-organized events that range from the casual, five-person, coffee-shop</p>
  </ion-item>
</ion-list>
</ion-content>
  
`
})
export class Tab1 {}