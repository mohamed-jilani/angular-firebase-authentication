import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';

const routes: Routes = [
  {path : '' ,redirectTo:'login' , pathMatch :'full'},
  {path : 'login', component : LoginComponent},
  {path : 'home' ,component : HomeComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'verifyemail' , component : VerifyemailComponent},
  {path : 'forgotpassword' , component : ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
