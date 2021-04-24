import { PurchasingDetails } from './purchasing-details';
import { Flights } from './flights';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private httpClient: HttpClient) { }

  flights: Flights[];
  purchasingFormData: PurchasingDetails = {
    id: '',
    FlightId: 0,
    fullName: '',
    email: '',
    mobile: '',
    cardOwnerName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  };

  selectedFlight:Flights;
  
  readonly baseURL = "/assets/FLIGHTS.json"
  readonly purchasingURL = "http://localhost:3000/data"
  readonly headers = { 'content-type': 'application/json' }
  getAllFlights() {
    return this.httpClient.get(this.baseURL);
  }

  setFlights(flights: Flights[]) {
    this.flights = flights;
  }

  createPurchasing() {
    return this.httpClient.post(this.purchasingURL, JSON.stringify(this.purchasingFormData), { 'headers': this.headers });
  }

  selectFlight(flight:Flights) {
    this.selectedFlight = flight;
  }

}
