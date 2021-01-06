import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinterestBoardComponent } from './pinterest/pinterest-board/pinterest-board.component';
import { PinterestBookmarkComponent } from './pinterest/pinterest-bookmark/pinterest-bookmark.component';
import { PinterestButtonFollowComponent } from './pinterest/pinterest-button-follow/pinterest-button-follow.component';
import { PinterestPinComponent } from './pinterest/pinterest-pin/pinterest-pin.component';
import { PinterestProfileComponent } from './pinterest/pinterest-profile/pinterest-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PinterestBoardComponent,
    PinterestBookmarkComponent,
    PinterestButtonFollowComponent,
    PinterestPinComponent,
    PinterestProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
