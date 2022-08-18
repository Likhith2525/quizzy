import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { AddtestComponent } from './addtest/addtest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewadminComponent,
    AddtestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
