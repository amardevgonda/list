import { Component } from '@angular/core';
import { PERSONS } from '../mock-data';
import { Person } from '../person.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  persons: Person[] = PERSONS;

  searchText: string = ''; 
  constructor(public dialog: MatDialog) {}

  addPerson(person: Person) {
    this.persons.push(person); 
  }


  openEditModal(person: Person) {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '400px',
      data: { person }
    });

    dialogRef.afterClosed().subscribe(editedPerson => {
      if (editedPerson) {
        const index = this.persons.findIndex(p => p.name === editedPerson.name);
        if (index !== -1) {
          this.persons[index] = editedPerson;
        }
      }
    });
  }
}
