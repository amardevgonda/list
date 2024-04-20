import { Component, Input } from '@angular/core';
import { Person } from '../person.interface';
// import { MatDialog } from '@angular/material/dialog';
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


  // openEditModal(person: Person) {
  //   const dialogRef = this.dialog.open(EditPersonComponent, {
  //     width: '400px',
  //     data: { person }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
 


  // openEditModal(person: Person) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = { person };
  //   dialogConfig.position = {
  //     // top: '50%',
  //     left: '35%'
  //   };
  //   dialogConfig.width = '400px'; // Set the width as per your requirement
  //   dialogConfig.panelClass = 'custom-dialog-container'; // Optional: Add custom styling to the dialog

  //   const dialogRef = this.dialog.open(EditPersonComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }



  openEditModal(person: Person) {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '400px',
      data: { person }
    });

    dialogRef.afterClosed().subscribe(editedPerson => {
      if (editedPerson) {
        Object.assign(this.person, editedPerson); // Update the person with edited data
      }
    });
  }
}
