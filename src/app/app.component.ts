import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { NewsService } from '../services/news.service';
import { Route, Router, NavigationEnd } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adresseName: string;
  strasse: string;
  hausnummer: string;
  stadt: string;
  plz: string;
  land: string;
  email: string;
  telefon: string;
  title: string;
  isCollapsed = true;
  route: string;
  public auth2: any;

  constructor(private newsService: NewsService,
              private router: Router) {
    this.title = environment.Title;
    this.adresseName = environment.AdresseName;
    this.strasse = environment.Strasse;
    this.hausnummer = environment.Hausnummer;
    this.stadt = environment.Stadt;
    this.plz = environment.PLZ;
    this.land = environment.Land;
    this.email = environment.Email;
    this.telefon = environment.Telefon;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.route = this.router.url;
    this.router.events.subscribe((event: NavigationEnd) => {
      this.route = event.url;
    });
  }


  // public googleInit() {
  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: environment.googleCredClientId,
  //       cookiepolicy: 'single_host_origin',
  //       scope: 'profile email'
  //     });
  //     this.attachSignin(document.getElementById('googleBtn'));
  //   });
  // }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        // YOUR CODE HERE


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit() {
  //   this.googleInit();
  // }
}
