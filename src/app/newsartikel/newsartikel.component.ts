import { Component, Input, OnInit } from '@angular/core';
import { Feed } from '../../models/feed';
import { Location } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-newsartikel',
  templateUrl: './newsartikel.component.html',
  styleUrls: ['./newsartikel.component.css']
})
export class NewsartikelComponent implements OnInit {
  private feed: Feed;

  constructor(
    private location: Location,
    private newsService: NewsService,
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.feed = this.newsService.getCurrentFeed();
    if (!this.feed) {
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    this.newsService.deleteCurrentFeed();
  }
}
