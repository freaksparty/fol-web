import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.less']
})
export class SponsorsComponent implements OnInit {
  private sponsors = [];

  constructor(private api: ApiService,
              private zone: NgZone) {}

  ngOnInit(): void {
    this.api.fol.sponsors().all().subscribe(
      (response) => this.onLoadSponsors(response),
      (error, statusCode) => console.error(error),
      () => console.log("Sponsors loaded")
    );
  }

  private onLoadSponsors(sponsors) {
    this.sponsors = sponsors;
  }
}
