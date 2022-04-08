import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { ViewAccountComponent } from './view-account/view-account.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'viewaccount', component: ViewAccountComponent, canActivate:[AuthGuard]},
  {path:'accounts', component:ListAccountsComponent, canActivate:[AuthGuard, RoleGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
