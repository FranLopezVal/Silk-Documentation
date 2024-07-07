import { Routes } from '@angular/router';
import { DocComponent } from '../../views/doc/doc.component';
import { gettingstartedComponent } from './docs/getting-start/gettingstarted.component';

export const docsRoutes: Routes = [
    {
        path: '',
        component: DocComponent
    }, {
        path: 'gettingstarted',
        component: gettingstartedComponent
    }
];
