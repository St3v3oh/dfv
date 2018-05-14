import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Feed } from '../../models/feed';
import { FeedEntry } from '../../models/feed-entry';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  // Display this feedEntry
  @Input() feedEntry: FeedEntry;
  // Context, from which Feed this Entry is
  @Input() feed: Feed;

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
  }

  readMoreClicked() {
    this.newsService.setCurrentFeed(this.feed);
  }
}
