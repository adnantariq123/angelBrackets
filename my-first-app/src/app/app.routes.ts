import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { BasicDescriptionComponent } from './basic-description/basic-description.component';
import { LoopingComponent } from './looping/looping.component'

export const routes: Routes = [
    { path: '', component: BasicDescriptionComponent },
    { path: 'hello', component: HelloComponent }, 
    { path: 'looping', component: LoopingComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }