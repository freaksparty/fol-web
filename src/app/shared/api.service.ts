import {Injectable} from '@angular/core';

declare var FPAPI;

@Injectable()
export class ApiService {
  private api;

  constructor() {
    //this.api = FPAPI.create("http://localhost:4000/api").events(2);
  }

  get fol() {
    return this.api;
  }
}
