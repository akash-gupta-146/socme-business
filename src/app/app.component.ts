import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SocialInfluencerPage } from '../pages/social-influencer/social-influencer';
import { SocialInfluencerDetailPage } from '../pages/social-influencer-detail/social-influencer-detail';
import { ProfilePage } from '../pages/profile/profile';
import { ListPage } from '../pages/list/list';
import { CompanyDetailPage } from '../pages/company-detail/company-detail';
import { IndividualPage } from '../pages/individual/individual';
import { SocialManagerPage } from '../pages/social-manager/social-manager';
import { YoutubeOwnerPage } from '../pages/youtube-owner/youtube-owner';
import { YoutubeOwnerDetailPage } from '../pages/youtube-owner-detail/youtube-owner-detail';
import { MatchesPage } from '../pages/matches/matches';
import { MessagesPage } from '../pages/messages/messages';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
import { Tab1 } from "../pages/social-manager/tab1-page";
import { Tab2 } from "../pages/social-manager/tab2-page";
import { RequestPage } from "../pages/request/request";
import { RequestDetailPage } from "../pages/request-detail/request";
import { PremiumPage } from "../pages/premium/premium";
import { RatingPage } from "../pages/rating/rating";
import { RateFormPage } from "../pages/rate-form/rate-form";

@Component({
  templateUrl: 'app.html',
  styles: [`
  .sidebar-button{
    background: rgba(105, 105, 105, 0.35);
    color: white;
  }
  .sidebar-button:active{
    color: #b3dff3;
  }
  .sidebar-header{
    color: white;
    height:180px;
    box-shadow: 0px 2px 15px grey;
  }
  `]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home' , component: HomePage, icon:'home'},
      { title: 'Social Influencer', component: SocialInfluencerPage, icon: 'contacts' },
      { title: 'Social Influencer Detail', component: SocialInfluencerDetailPage, icon: 'contacts' },
      { title: 'Youtube Owners', component: YoutubeOwnerPage, icon: 'logo-youtube' },      
      { title: 'Youtube Owner Details', component: YoutubeOwnerDetailPage, icon: 'logo-youtube' }, 
      { title: 'Messaging', component: MessagesPage, icon: 'mail' },
      { title: 'Requests', component: RequestPage, icon: 'person-add' }, 
      { title: 'Requests Details', component: RequestDetailPage, icon: 'person-add' }, 
      { title: 'Rate', component: RatingPage, icon: 'star-half' },  
      { title: 'Rate Form', component: RateFormPage, icon: 'star-half' },                 
      { title: 'Payment History', component: PaymentHistoryPage, icon: 'logo-usd' },
      { title: 'Become Premium', component: PremiumPage, icon: 'star' },      
      { title: 'Profile', component: ProfilePage, icon: 'person' },      
      // { title: 'List', component: ListPage },
      // { title: 'Company Details', component: CompanyDetailPage },
      // { title: 'Social Managers', component: SocialManagerPage },
      // { title: 'Individual', component: IndividualPage },
      // { title: 'Matches', component: MatchesPage },
      // { title: 'Payment Gateway', component: PaymentGatewayPage },
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
