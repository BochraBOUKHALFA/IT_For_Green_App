import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './maps/maps.component';
import { SigninComponentModal } from './modals/signin_modal/signin-modal.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'maps', component: MapComponent },
  { path: 'login', component: SigninComponentModal },
  { path: 'home' , component:HomeComponent},
  { path: 'user' , component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }