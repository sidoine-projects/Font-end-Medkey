import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetPasswordComponent } from "./forgetpassword/forgetpassword.component";
import { ResetPasswordComponent } from "./resetpassword/resetpassword.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgetpassword", component: ForgetPasswordComponent },
  { path: "resetpassword", component: ResetPasswordComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserPagesModule {}
