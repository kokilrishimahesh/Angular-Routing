import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Set the default route here
  { path: 'login', component: LoginPageComponent }, 
  { path: 'signup', component: SignupPageComponent },
  { path: 'user-dashboard', component: UserDashboardComponent }
];
