import { Flights } from './flights';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinationFilter'
})
export class DestinationFilterPipe implements PipeTransform {

  transform(flights: Flights[], destinationSearchValue: string): Flights[] {
    if (!flights || !destinationSearchValue) {
      return flights;
    }
    return flights.filter(flight => flight.destination.toLocaleLowerCase().includes(destinationSearchValue.toLocaleLowerCase()));
  }

}
