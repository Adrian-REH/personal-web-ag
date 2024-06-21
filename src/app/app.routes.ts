import {  Routes } from '@angular/router';
import { ChildCardInfoComponent } from './child-card-info/child-card-info.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SlideChildCardComponent } from './slide-child-card/slide-child-card.component';
import { Madrid42Component } from './madrid-42/madrid-42.component';
import { BackendComponent } from './backend/backend.component';

export const routes: Routes = [

    { 
        path: 'home',
        title: 'home',
        component:  HomeComponent,
    },
    { 
        path: 'frontend',
        title: 'Front End',
        component:  FrontendComponent,
    },
    { 
        path: '42-madrid',
        title: '42 Madrid',
        component:  Madrid42Component,
    },
    { 
        path: 'backend',
        title: 'Back End',
        component:  BackendComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
