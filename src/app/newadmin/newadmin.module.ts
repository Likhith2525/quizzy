import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { AddtestComponent } from './addtest/addtest.component';
import { FormsModule } from '@angular/forms';
import { ViewscoresComponent } from './viewscores/viewscores.component';
import { AddmidmarksComponent } from './addmidmarks/addmidmarks.component';
import { ViewmidmarksComponent } from './viewmidmarks/viewmidmarks.component';


@NgModule({
  declarations: [
    NewadminComponent,
    AddtestComponent,
    ViewscoresComponent,
    AddmidmarksComponent,
    ViewmidmarksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
