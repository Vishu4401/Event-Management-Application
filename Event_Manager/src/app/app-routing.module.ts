import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEventComponent} from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { LoginEventComponent } from './login-event/login-event.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  {
    component: AddEventComponent,
    path: 'add'
  },

  {
    component: LoginEventComponent,
    path: 'login'
  },

  {
    component: UpdateEventComponent,
    path: 'update/:id'
  },

  {
    component: RegisterEventComponent,
    path: 'register'
  },

  {
    component: ListEventComponent,
    path: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
