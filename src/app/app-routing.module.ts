import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransferformComponent } from './transferform/transferform.component';
const routes: Routes = [
 {path:'login', component:LoginComponent},
  { path:'transfer', component: TransferformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
