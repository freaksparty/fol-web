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
  private boundary = false;

  constructor() {}

  ngOnInit() {

  }

  get navigation(): Boolean {
    return this.news.length>this.pageSize;
  }

  get collectionSize(): Number {
    if(this.news.length>this.pageSize){
      return this.news.length;
    }
    else{
      return 0;
    }
  }

  get selectedNews(): any[] {
    const init = this.pageSize * (this.selectedPage - 1);
    const end = init + this.pageSize;

    return this.news.slice(init, end);
  }
}
