import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnageListComponent } from './personnage/personnage-list/personnage-list.component';
import { PersonnageDetailComponent } from './personnage/personnage-detail/personnage-detail.component';
import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PersonnageService} from './personnage/shared/personnage.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonnageListComponent,
    PersonnageDetailComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule
  ],
  providers: [PersonnageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
