import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit{
  private activities = [];
  private news = [];

  constructor(private api: ApiService, private zone: NgZone) {}

  ngOnInit(): void {
    this.api.fol.nested().all().subscribe(
      (response) => this.onLoadData(response),
      (error, statusCode) => console.error(error),
      () => console.log("Data loaded")
    );
  }

  private onLoadData(data) {
    this.activities = data.activities;
    this.news = data.news;
  }
}
