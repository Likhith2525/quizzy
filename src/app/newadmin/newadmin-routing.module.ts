import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmidmarksComponent } from './addmidmarks/addmidmarks.component';
import { AddtestComponent } from './addtest/addtest.component';
import { NewadminComponent } from './newadmin.component';
import { ViewmidmarksComponent } from './viewmidmarks/viewmidmarks.component';
import { ViewscoresComponent } from './viewscores/viewscores.component';

const routes: Routes = [{ path: '', component: NewadminComponent ,children:[
  {path:"add-test",component:AddtestComponent},
  {path:"view-scores",component:ViewscoresComponent},
  {path:"add-mid-marks",component:AddmidmarksComponent},
  {path:"view-mid-marks",component:ViewmidmarksComponent},
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadminRoutingModule { }
