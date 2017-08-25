import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompanyDetailPage } from '../pages/company-detail/company-detail';
import { IndividualPage } from '../pages/individual/individual';
import { SocialManagerPage } from '../pages/social-manager/social-manager';
import { YoutubeOwnerPage } from '../pages/youtube-owner/youtube-owner';
import { MatchesPage } from '../pages/matches/matches';
import { MessagesPage } from '../pages/messages/messages';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
import { SocialInfluencerPage } from '../pages/social-influencer/social-influencer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Tab1 } from "../pages/social-manager/tab1-page";
import { Tab2 } from "../pages/social-manager/tab2-page";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfluencerPage,
    CompanyDetailPage,
    IndividualPage,
    SocialManagerPage,Tab1,Tab2,
    YoutubeOwnerPage,
    MatchesPage,
    MessagesPage,
    PaymentGatewayPage,
    PaymentHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfluencerPage,
    CompanyDetailPage,
    IndividualPage,
    SocialManagerPage,Tab1,Tab2,
    YoutubeOwnerPage,
    MatchesPage,
    MessagesPage,
    PaymentGatewayPage,
    PaymentHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
