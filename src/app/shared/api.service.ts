import {Injectable} from '@angular/core';
import { EnvironmentService } from 'app/shared/environment.service';

declare var FPAPI;

@Injectable()
export class ApiService {
  private api;

  constructor(
    env: EnvironmentService
  ) {
    this.api = FPAPI.create(env.endpoint).events(env.event);
  }

  get fol() {
    return this.api;
  }
}
