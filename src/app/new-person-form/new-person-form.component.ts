import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person.interface';

@Component({
  selector: 'app-new-person-form',
  templateUrl: './new-person-form.component.html',
  styleUrls: ['./new-person-form.component.css']
})
export class NewPersonFormComponent {
  @Output() addPerson = new EventEmitter<Person>();
  personForm: FormGroup;
  avatarPreview: string | ArrayBuffer | null = null; // Add this line to declare avatarPreview variable

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      avatar: [''],
      country: ['']
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      console.log(this.personForm.value);
      
      this.addPerson.emit(this.personForm.value);
      console.log(this.addPerson);
      
      this.personForm.reset();
      this.avatarPreview = null; // Reset avatar preview after form submission
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatarPreview = reader.result;
        this.personForm.patchValue({
          avatar: reader.result
        });
      };
    }
  }
}
