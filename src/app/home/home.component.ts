import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private feedUrls: Array<string>;
  private feeds: Array<Array<any>>;

  constructor(
    private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.feeds = new Array<Array<any>>();
    this.feedUrls = new Array<string>();
    // tslint:disable-next-line:max-line-length
    this.feedUrls.push('https%3A%2F%2Fnews.google.com%2Fnews%2Frss%2Fsearch%2Fsection%2Fq%2Fdiesel%2520fahr%2520verbot%3Fhl%3Dde%26gl%3DDE%26ned%3Dde');
    // tslint:disable-next-line:max-line-length
    // this.feedUrls.push('https%3A%2F%2Fnews.google.com%2Fnews%2Frss%2Fsearch%2Fsection%2Fq%2Ffahr%2520verbot%3Fhl%3Dde%26gl%3DDE%26ned%3Dde');
    // tslint:disable-next-line:max-line-length
    this.feedUrls.push('https%3A%2F%2Fnews.google.com%2Fnews%2Frss%2Fsearch%2Fsection%2Fq%2Fdiesel%2520skandal%3Fhl%3Dde%26gl%3DDE%26ned%3Dde');
    // tslint:disable-next-line:max-line-length
    this.feedUrls.push('https%3A%2F%2Fnews.google.com%2Fnews%2Frss%2Fsearch%2Fsection%2Fq%2Fvolkswagen%2520skandal%3Fhl%3Dde%26gl%3DDE%26ned%3Dde');
    this.setFeeds();
    this.refreshFeed();
  }

  private setFeeds() {
    // get the feeds
    // returnedFeeds.foreach(feed => {
      // if(!this.feedUrls[2]) {
        // this.feedUrls.push(feed);
      // }
      // else {
        // this.feeds.push(this.feedUrls);
        // this.feedUrls = new Array<string>();
      // }
    // })
    //
  }

  private refreshFeed() {
    let tempArray = new Array<any>();
    let counter = 0;

    this.feedUrls.forEach(feedUrl => {
      this.newsService.getFeedContent(feedUrl).subscribe(feed => {
        feed.items.forEach(item => {
          item.content = item.content.replace('<img src="' + item.thumbnail + '" border="1">', '');
          item.content = item.content.replace('<table border="0" cellpadding="2" cellspacing="3">', '');
          item.content = item.content.replace('<tr>', '');
          item.content = item.content.replace('<td>', '');
          item.content = item.content.replace('</td>', '');
          item.content = item.content.replace('</tr>', '');
          item.content = item.content.replace('</table>', '');
          item.content = item.content.replace('<td>', '');
          item.content = item.content.replace('</td>', '');
          item.content = item.content.replace('<ol>', '');
          item.content = item.content.replace('</ol>', '');
          item.content = item.content.replace(item.content.substring(item.content.lastIndexOf('<a'), item.content.length), '');
        });
          tempArray[counter] = feed.items;
        },
        error => console.log(error),
        () => {
          counter++;
          if (counter === 3) {
            this.feeds.push(tempArray);
            tempArray = new Array<any>();
            counter = 0;
          }
        }
      );
    });
  }
}
