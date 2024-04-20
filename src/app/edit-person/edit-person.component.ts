import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from '../person.interface';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {
  editedPerson: Person;
  avatarPreview: string | ArrayBuffer | null = null; // Add this line to declare avatarPreview variable

  constructor(
    public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { person: Person }
  ) {
    // Make a copy of the person data to avoid directly modifying the original data
    this.editedPerson = { ...data.person };
  }

  saveChanges(): void {
    // Save changes and close the dialog
    this.dialogRef.close(this.editedPerson);
  }

  cancel(): void {
    // Close the dialog without saving changes
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatarPreview = reader.result;
        this.editedPerson.avatar = reader.result as string;
      };
    }
  }
  
}
