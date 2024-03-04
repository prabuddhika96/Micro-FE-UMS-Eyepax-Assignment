import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'edit-profile',
        component: EditProfileComponent
    }
    // {
    //     path:'',
    //     component: DashboardComponent,
    //     children: [
    //       {
    //         path:'dashboard',
    //         component: DashboardComponent
    //       }
    //     ]
    //   }

];