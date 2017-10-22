import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  @Input() news:any[];
  private math = Math;
  private pages = Array;
  
    constructor() {}

    ngOnInit(): void {}
}
