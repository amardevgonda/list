import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPersonFormComponent } from './new-person-form/new-person-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { AgePipe } from './age.pipe';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonFilterPipe } from './person-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewPersonFormComponent,
    PersonListComponent,
    CardViewComponent,
    AgePipe,
    EditPersonComponent,
    PersonFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
