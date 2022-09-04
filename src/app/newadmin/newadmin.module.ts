import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { AddtestComponent } from './addtest/addtest.component';
import { FormsModule } from '@angular/forms';
import { ViewscoresComponent } from './viewscores/viewscores.component';


@NgModule({
  declarations: [
    NewadminComponent,
    AddtestComponent,
    ViewscoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
