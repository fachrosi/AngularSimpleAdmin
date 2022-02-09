import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path      : '',
    component : SigninComponent
  },{
    path      : 'signup',
    component : SignupComponent
  },{
    path      : '',
    component : LayoutComponent,
    children  : [
      {
        path      : 'about',
        component : AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
