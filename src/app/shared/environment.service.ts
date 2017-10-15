import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class EnvironmentService {

    constructor() { }

    get endpoint() {
        return environment.endpoint;
    }

    get event() {
        return environment.event;
    }
}