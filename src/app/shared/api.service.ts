import {Injectable, NgZone} from '@angular/core';
import { EnvironmentService } from 'app/shared/environment.service';

declare var FPAPI;

@Injectable()
export class ApiService {
  private api;

  constructor(
    private env: EnvironmentService,
    private zone: NgZone
  ) {
    this.api = FPAPI.create(env.endpoint, (fn) => this.zone.run(() => fn())).events(env.event);
  }

  get fol() {
    return this.api;
  }
}
