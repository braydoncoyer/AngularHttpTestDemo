import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'users', component: UserPageComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
