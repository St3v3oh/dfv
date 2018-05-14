import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Anwalt } from '../models/anwalt';
import { Anwaelte } from '../models/anwaelte';

@Injectable()
export class AnwaelteService {
  currentAnwalt: Anwalt;
  anwaelte: Anwaelte;
  public anwaltListe: Array<Anwalt>;

  constructor(private http: Http) {
    this.anwaltListe = new Array<Anwalt>();
    this.anwaelte = new Anwaelte();
  }

  getCurrentAnwalt(): Anwalt {
    return this.currentAnwalt;
  }

  setCurrentAnwalt(newAnwalt: Anwalt) {
    this.currentAnwalt = newAnwalt;
  }

  deleteCurrentAnwalt() {
    this.currentAnwalt = null;
  }

  public getAllAnwaelte(): void {
    this.anwaltListe = this.anwaelte.anwaltliste;
  }
}
