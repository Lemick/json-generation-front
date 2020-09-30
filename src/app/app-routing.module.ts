import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsonEditComponent} from './pages/json-edit/json-edit.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/json-edit' },
  { path: 'json-edit', component: JsonEditComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
