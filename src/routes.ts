import {Routes, RouterModule} from '@angular/router'
import {LoginComponent} from './components/login/login.component';

export const AppRouterConfig: Routes = [
  { path: '', component: LoginComponent }
];

/* Export router module and declarations */
export const AppRouterModule = RouterModule.forRoot(AppRouterConfig, { useHash: true });
export const AppRouterDeclarations = [LoginComponent];
export const AppRouterProviders = [];
