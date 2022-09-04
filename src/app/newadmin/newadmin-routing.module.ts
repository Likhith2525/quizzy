import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtestComponent } from './addtest/addtest.component';
import { NewadminComponent } from './newadmin.component';
import { ViewscoresComponent } from './viewscores/viewscores.component';

const routes: Routes = [{ path: '', component: NewadminComponent ,children:[
  {path:"add-test",component:AddtestComponent},
  {path:"view-scores",component:ViewscoresComponent},

  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadminRoutingModule { }
