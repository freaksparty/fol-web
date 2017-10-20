import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  news = [];
  
    constructor(private api: ApiService) {}

    ngOnInit(): void {
      this.api.fol.news().all().subscribe(
        (response) => this.onLoadNews(response),
        (error, statusCode) => console.error(error),
        () => console.log("News loaded")
      )
    }

    private onLoadNews(news:Array<Object>) : void {
      this.news.splice(0, this.news.length);
      this.news = this.news.concat(news);
    }
}
