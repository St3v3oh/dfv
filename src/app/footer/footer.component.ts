import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  adresseName: string;
  strasse: string;
  hausnummer: string;
  stadt: string;
  plz: string;
  land: string;
  email: string;
  telefon: string;
  web: string;
  constructor() {
    this.adresseName = environment.AdresseName;
    this.strasse = environment.Strasse;
    this.hausnummer = environment.Hausnummer;
    this.stadt = environment.Stadt;
    this.plz = environment.PLZ;
    this.land = environment.Land;
    this.email = environment.Email;
    this.telefon = environment.Telefon;
    this.web = environment.Web;
  }

  ngOnInit() {
  }

}
