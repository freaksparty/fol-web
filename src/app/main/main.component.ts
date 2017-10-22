import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  private activities = [];
  private news = [];
  
    constructor(private api: ApiService, private zone: NgZone) {}

    ngOnInit(): void {
      this.api.fol.nested().all().subscribe(
        (response) => this.onLoadData(response),
        (error, statusCode) => console.error(error),
        () => console.log("Data loaded")
      )
    }
  
    private onLoadData(data) {
      this.zone.run(() => {this.activities = data.activities;});
      this.zone.run(() => {this.news = data.news;});
    }
}
