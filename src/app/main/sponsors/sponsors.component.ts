import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.less']
})
export class SponsorsComponent implements OnInit{
  sponsors = [];
  
    constructor(private api: ApiService) {}

    ngOnInit(): void {
      this.api.fol.sponsors().all().subscribe(
        (response) => this.onLoadSponsors(response),
        (error, statusCode) => console.error(error),
        () => console.log("Sponsors loaded")
      )
    }

    ngAfterViewInit(){
      console.log("HI");
    }

    private onLoadSponsors(sponsors:Array<Object>) : void {
      this.sponsors.splice(0, this.sponsors.length);
      this.sponsors = this.sponsors.concat(sponsors);
    }
}
