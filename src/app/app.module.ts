import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { SearchfilterPipe } from './shared/searchfilter.pipe';
import { PurchasingTicketComponent } from './purchasing-ticket-page/purchasing-ticket/purchasing-ticket.component';
import { PurchasingTicketPageComponent } from './purchasing-ticket-page/purchasing-ticket-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { DestinationFilterPipe } from './shared/destination-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent,
    SearchfilterPipe,
    PurchasingTicketComponent,
    PurchasingTicketPageComponent,
    HomeComponent,
    DestinationFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'ticket', component: PurchasingTicketPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
