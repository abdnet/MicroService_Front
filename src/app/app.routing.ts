import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { EnseignantComponent } from 'app/enseignant/enseignant.component';
import { FormationComponent } from 'app/formation/formation.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'profil',
        component: UserComponent
    },
    {
        path: 'diplomes',
        component: FormationComponent
    },
    {
        path: 'enseignant',
        component: EnseignantComponent
    }
]
