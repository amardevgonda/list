import { Component, Input } from '@angular/core';
import { Person } from '../person.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  @Input() person: Person;

  constructor(public dialog: MatDialog) {}


  openEditModal(person: Person) {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '400px',
      data: { person }
    });

    dialogRef.afterClosed().subscribe(editedPerson => {
      if (editedPerson) {
        Object.assign(this.person, editedPerson); // for the Update the person with edited data
      }
    });
  }
}
