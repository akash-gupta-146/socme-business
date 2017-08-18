import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IndividualPage } from '../pages/individual/individual';
import { SocialManagerPage } from '../pages/social-manager/social-manager';
import { YoutubeOwnerPage } from '../pages/youtube-owner/youtube-owner';
import { MatchesPage } from '../pages/matches/matches';
import { MessagesPage } from '../pages/messages/messages';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndividualPage,
    SocialManagerPage,
    YoutubeOwnerPage,
    MatchesPage,
    MessagesPage,
    PaymentGatewayPage
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
    IndividualPage,
    SocialManagerPage,
    YoutubeOwnerPage,
    MatchesPage,
    MessagesPage,
    PaymentGatewayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
