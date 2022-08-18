import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtestComponent } from './addtest/addtest.component';
import { NewadminComponent } from './newadmin.component';

const routes: Routes = [{ path: '', component: NewadminComponent ,children:[
  {path:"add-product",component:AddtestComponent},


  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadminRoutingModule { }
