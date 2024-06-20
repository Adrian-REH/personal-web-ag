import {  Routes } from '@angular/router';
import { ChildCardInfoComponent } from './child-card-info/child-card-info.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';

export const routes: Routes = [

    { 
        path: 'home',
        title: 'home',
        component:  HomeComponent,
    },
    { 
        path: 'front-end',
        title: 'front-end',
        component:  FrontendComponent,
    },
    { 
        path: 'child',
        title: 'chils',
        component:  ChildCardInfoComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
