import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { BasicDescriptionComponent } from './basic-description/basic-description.component';

export const routes: Routes = [
    { path: '', component: BasicDescriptionComponent },
    { path: 'hello', component: HelloComponent }
];
