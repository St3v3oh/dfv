import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Anwalt } from '../../models/anwalt';
import { AnwaelteService } from '../../services/anwaelte.service';

@Component({
  selector: 'app-rechtsanwaelte',
  templateUrl: './rechtsanwaelte.component.html',
  styleUrls: ['./rechtsanwaelte.component.css']
})
export class RechtsanwaelteComponent implements OnInit {
  currentAnwalt: Anwalt;
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
    this.currentAnwalt = this.anwaelteSvc.getCurrentAnwalt();
    if (!this.currentAnwalt) {
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    this.anwaelteSvc.deleteCurrentAnwalt();
  }
}
