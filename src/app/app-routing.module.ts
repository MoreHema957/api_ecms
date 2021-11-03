import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LandingComponent } from './pages/landing/landing.component';
const routes: Routes = [
  { path: 'dashbord', component: LandingComponent },
  { path: '',   redirectTo: '/dashbord', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }