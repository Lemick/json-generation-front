import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsonEditComponent} from './pages/json-edit/json-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/json-edit' },
  { path: '**', component: JsonEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
