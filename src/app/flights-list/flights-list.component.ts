import { Flights } from '../shared/flights';
import { FlightsService } from './../shared/flights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  constructor(public service: FlightsService) { }

  Flights: Flights[];
  searchValue: string;
  destinationSearchValue:string;
  ngOnInit(): void {
    this.service.getAllFlights().subscribe((res: Flights[]) => {
      this.service.setFlights(res);
      this.Flights = res;
    })
  }

}
