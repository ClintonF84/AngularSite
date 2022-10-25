import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogDetailsComponent } from './blog-details';

const routes: Routes = [
  { path: 'details', component: BlogDetailsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
