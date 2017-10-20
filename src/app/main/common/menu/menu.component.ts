import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() event: string;
  activities = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.fol.activities().all().subscribe(
      (response) => this.onLoadActivities(response),
      (error, statusCode) => console.error(error),
      () => console.log("Activities loaded")
    )
  }

  private onLoadActivities(activities:Array<Object>) : void {
    this.activities.splice(0, this.activities.length);
    this.activities = this.activities.concat(activities);
  }

}
