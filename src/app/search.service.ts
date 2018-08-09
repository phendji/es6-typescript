import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { SearchItem } from './search-item';

@Injectable()
export class SearchService {

  private apiRoot: string;
  public results: any[];
  private loading: boolean;

  constructor(private http: HttpClient) {
    this.apiRoot = 'https://itunes.apple.com/search';
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiRoot = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiRoot)
        .toPromise()
        .then(
          res => {
            this.results = res['results'].map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve();
          },
          error => {
            reject(error);
          }
        );
    });

    return promise;
  }

}
