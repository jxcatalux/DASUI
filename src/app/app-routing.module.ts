import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginRedirectGuard } from './guards/login/login-redirect.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent,
    canActivate: [LoginRedirectGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
