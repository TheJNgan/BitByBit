import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SelectionComponent } from './components/selection/selection.component';
import { WishComponent } from './components/wish/wish.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'select', component: SelectionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent},
  {path: 'createUser', component: CreateComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wish', component: WishComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
