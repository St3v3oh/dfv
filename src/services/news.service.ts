import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Feed } from '../models/feed';

@Injectable()
export class NewsService {
  private _headers = new Headers();
  private currentFeed: Feed;
  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: Http
  ) { }

   public getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url + '&api_key=r61mefoloikoddlfhsiqjrzg2c2hbsfl6bbmyqgt')
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  public setCurrentFeed(newFeed: Feed) {
    this.currentFeed = newFeed;
  }

  public getCurrentFeed(): Feed {
    return this.currentFeed;
  }

  public deleteCurrentFeed() {
    this.currentFeed = null;
  }

  private extractFeeds(res: Response): Feed {
    const feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
