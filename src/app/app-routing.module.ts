import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: AppComponent},
  {path: 'secure', component: SecureComponent},
  {path: '', redirectTo: 'home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
