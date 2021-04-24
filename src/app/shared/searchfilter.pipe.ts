import { Flights } from './flights';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(flights: Flights[], searchValue: string): Flights[] {
    if (!flights || !searchValue) {
      return flights;
    }
    return flights.filter(flight => flight.source.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
