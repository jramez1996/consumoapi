import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListApiComponent} from './list-api/list-api.component';
const routes: Routes = [
  {
    path: '',
    component: ListApiComponent
  }

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
