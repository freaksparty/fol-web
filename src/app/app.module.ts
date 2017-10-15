import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuiModule } from 'ng2-semantic-ui';

import { ApiService } from 'app/shared/api.service';
import { EnvironmentService } from 'app/shared/environment.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [
    ApiService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
