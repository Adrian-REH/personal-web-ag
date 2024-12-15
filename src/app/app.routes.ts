import {  Routes } from '@angular/router';
import { ChildCardInfoComponent } from './child-card-info/child-card-info.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { Madrid42Component } from './madrid-42/madrid-42.component';
import { BackendComponent } from './backend/backend.component';
import { TouchSliderComponent } from './touch-slider/touch-slider.component';

export const routes: Routes = [
    { 
        path: 'slide',
        title: 'slide',
        component:  TouchSliderComponent,
    },
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
        path: '42madrid',
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
