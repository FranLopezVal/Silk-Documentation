import { Routes } from '@angular/router';
import { InitComponent } from './views/init/init.component';
import { AboutComponent } from './views/about/about.component';
import { LibraryComponent } from './views/library/library.component';
import { HomeComponent } from './views/home/home.component';
import { docsRoutes } from './versions/0.1.6.24/docs.routes';
import { DocComponent } from './views/doc/doc.component';

export const routes: Routes = [
    {
        path: '',
        component: InitComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'library',
        component: LibraryComponent
    }, {
        path: 'doc',
        component: DocComponent
    }, {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
