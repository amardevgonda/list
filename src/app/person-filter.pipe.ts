import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person.interface';

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  transform(persons: Person[], searchText: string): Person[] {
    if (!persons || !searchText) {
      return persons;
    }

    searchText = searchText.toLowerCase();
    return persons.filter(person =>
      person.name.toLowerCase().includes(searchText)
    );
  }

}
