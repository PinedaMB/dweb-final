import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'perfil', component: UserComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
