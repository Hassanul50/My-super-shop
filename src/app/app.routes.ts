import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login/login';
import { Registration } from './user/registration/registration';

export const routes: Routes = [
    {
        path: '',redirectTo: 'Login', pathMatch: 'full'
    },
    // {
    //     path: 'Login', loadComponent: () => import('./features/auth/login/login/login').then(m => m.Login)
    // }
    {
        path: 'Login', component:Login
    },
    {
        path: 'Registration',component:Registration
    }
    
];
