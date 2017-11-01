import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuiModule } from 'ng2-semantic-ui';

import { ApiService } from 'app/shared/api.service';
import { EnvironmentService } from 'app/shared/environment.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SponsorsComponent } from './main/sponsors/sponsors.component';
import { MenuComponent } from './main/common/menu/menu.component';
import { NewsComponent } from './main/news/news.component';
import { FooterComponent } from './main/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SponsorsComponent,
    MenuComponent,
    NewsComponent,
    FooterComponent
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
