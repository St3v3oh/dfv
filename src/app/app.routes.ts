import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FahrverbotskarteComponent } from './fahrverbotskarte/fahrverbotskarte.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { VerkaufsportalComponent } from './verkaufsportal/verkaufsportal.component';
import { FeedEntry } from '../models/feed-entry';
import { ImpressumComponent } from './impressum/impressum.component';
import { NewsartikelComponent } from './newsartikel/newsartikel.component';
import { RechtsanwaelteComponent } from './rechtsanwaelte/rechtsanwaelte.component';
import { RechtsanwaltsFeedComponent } from './rechtsanwalts-feed/rechtsanwalts-feed.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'index.html', component: HomeComponent },
    { path: 'fahrverbotskarte', component: FahrverbotskarteComponent },
    { path: 'home', redirectTo: '', component: HomeComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'newsartikel', component: NewsartikelComponent },
    { path: 'newsfeed', component: NewsfeedComponent },
    { path: 'rechtsanwaltsFeed', component: RechtsanwaltsFeedComponent },
    { path: 'rechtsanwalt', component: RechtsanwaelteComponent },
    { path: 'verkaufsportal', component: VerkaufsportalComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
