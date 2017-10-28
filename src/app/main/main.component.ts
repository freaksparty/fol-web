import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit{
  private event = [];
  private activities = [];
  private news = [];

  constructor(private api: ApiService, private zone: NgZone) {}

  ngOnInit(): void {
    this.api.fol.all().subscribe(
      (response) => this.onLoadData(response),
      (error, statusCode) => console.error(error),
      () => console.log("Data loaded")
    );

    this.api.fol.news().all({mode: "basic"}).subscribe(
      (response) => this.onLoadNews(response),
      (error, statusCode) => console.error(error),
      () => console.log("News loaded")
    );
  }

  private onLoadData(data) {
    this.event = data[0];
  }

  private onLoadNews(data) {
    this.news = data;
  }
}
