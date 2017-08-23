import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompanyDetailPage } from '../pages/company-detail/company-detail';
import { IndividualPage } from '../pages/individual/individual';
import { SocialManagerPage } from '../pages/social-manager/social-manager';
import { YoutubeOwnerPage } from '../pages/youtube-owner/youtube-owner';
import { MatchesPage } from '../pages/matches/matches';
import { MessagesPage } from '../pages/messages/messages';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { Tab1 } from "../pages/social-manager/tab1-page";
import { Tab2 } from "../pages/social-manager/tab2-page";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Company Details', component: CompanyDetailPage },
      { title: 'Social Managers', component: SocialManagerPage },
      { title: 'Individual', component: IndividualPage },
      { title: 'Youtube Owners', component: YoutubeOwnerPage },
      { title: 'Matches', component: MatchesPage },
      { title: 'Messages', component: MessagesPage },
      { title: 'Payment Gateway', component: PaymentGatewayPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
