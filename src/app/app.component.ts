import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fol works!';

  constructor(api: ApiService) {
    api.fol.sponsors().all().subscribe(
      (sponsors) => console.log(sponsors),
      (error) => console.error(error),
      () => console.log("all done")
    )
  }
}
