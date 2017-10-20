import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  activities = [];
  
    constructor(api: ApiService) {
      api.fol.nested().all().subscribe(
        (response) => this.activities=response.activities,
        (error, statusCode) => console.error(error),
        () => console.log(this.activities)
      )
    }

}
