import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { FahrverbotskarteComponent } from './fahrverbotskarte/fahrverbotskarte.component';
import { NewsService } from './../services/news.service';

import { routing } from './app.routes';
import { VerkaufsportalComponent } from './verkaufsportal/verkaufsportal.component';
import { HomeComponent } from './home/home.component';
import { NewsartikelComponent } from './newsartikel/newsartikel.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PraesentationsComponent } from './praesentations/praesentations.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { HttpModule } from '@angular/http';
import { AnwaelteService } from '../services/anwaelte.service';
import { FooterComponent } from './footer/footer.component';
import { RechtsanwaelteComponent } from './rechtsanwaelte/rechtsanwaelte.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RechtsanwaltsFeedComponent } from './rechtsanwalts-feed/rechtsanwalts-feed.component';

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpModule,
    routing,
    TooltipModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NewsfeedComponent,
    FahrverbotskarteComponent,
    VerkaufsportalComponent,
    HomeComponent,
    NewsartikelComponent,
    HeaderMenuComponent,
    PraesentationsComponent,
    StripHtmlTagsPipe,
    FooterComponent,
    RechtsanwaelteComponent,
    ImpressumComponent,
    RechtsanwaltsFeedComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    NewsService,
    AnwaelteService
  ]
})
export class AppModule { }
