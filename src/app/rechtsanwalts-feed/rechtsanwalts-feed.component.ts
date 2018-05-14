import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnwaelteService } from '../../services/anwaelte.service';
import { Anwalt } from '../../models/anwalt';

@Component({
  selector: 'app-rechtsanwalts-feed',
  templateUrl: './rechtsanwalts-feed.component.html',
  styleUrls: ['./rechtsanwalts-feed.component.css']
})

export class RechtsanwaltsFeedComponent implements OnInit {
  private anwaltListe: Array<Array<Anwalt>>;
  private filter: Map<string, string>;
  constructor(
    private anwaelteSvc: AnwaelteService,
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.filter = new Map<string, string>();
    this.anwaelteSvc.getAllAnwaelte();
    this.anwaltListe = this.structureAnwaelte(this.anwaelteSvc.anwaltListe);
  }

  readMoreClicked(anwalt) {
    this.anwaelteSvc.setCurrentAnwalt(anwalt);
  }

  setFilter(column, value) {
    this.filter.set(column, value);
    this.filterAnwaelte();
  }

  filterAnwaelte() {
    this.anwaltListe.filter(anwalt => {
      this.filter.forEach((value, key) => {
        return anwalt[key] === value;
      });
    });
  }

  structureAnwaelte(anwaltListe: Array<Anwalt>): Array<Array<Anwalt>> {
    let tempArray = new Array<Anwalt>();
    const returnArray = new Array<Array<Anwalt>>();
    anwaltListe.forEach(anwalt => {
      if (!tempArray[2]) {
        tempArray.push(anwalt);
      } else {
        returnArray.push(tempArray);
        tempArray = new Array<Anwalt>();
      }
    });
    if (!tempArray[2]) {
      returnArray.push(tempArray);
    }
    return returnArray;
  }
}
