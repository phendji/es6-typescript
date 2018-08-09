import { Component } from '@angular/core';
import { SearchService } from './search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ref : https://codecraft.tv/courses/angular/http/http-with-promises/
  public loading: boolean;

  constructor(private itunes: SearchService) {
    this.loading = false;
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term)
      .then(() => this.loading = false);
  }

}
