import { Routes } from '@angular/router';
import { InitComponent } from './views/init/init.component';

export const routes: Routes = [
    {
        path: 'home',
        component: InitComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
