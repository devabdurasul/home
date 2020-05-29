import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HallComponent} from './components/hall/hall.component';

const routes: Routes = [
  { path: '', component: HallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
