import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'fol-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  @Input() private news = [];
  private pageSize = 7;
  private maxSize = 3;
  private selectedPage = 1;
  private navigation = true;
  private boundary = false;

  constructor() {}

  ngOnInit() {

  }

  get collectionSize(): Number {
    return this.news.length;
  }

  get selectedNews(): any[] {
    const init = this.pageSize * (this.selectedPage - 1);
    const end = init + this.pageSize;

    return this.news.slice(init, end);
  }
}
