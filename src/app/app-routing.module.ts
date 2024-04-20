import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPersonFormComponent } from './new-person-form/new-person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [
  { path: 'form',
   component: NewPersonFormComponent },
  {
    path: '',
    component: PersonListComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
