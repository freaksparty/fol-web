import { Component, Input, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() event: string;
  @Input() logo: string;
  @Input() logo_mobile: string;
  @Input() activities: any[];

  constructor(private zone: NgZone) {}

  ngOnInit(): void {}

}
