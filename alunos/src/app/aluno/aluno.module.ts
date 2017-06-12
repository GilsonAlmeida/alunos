import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import { AlunoRoutingModule } from './aluno-routing.module';

import { CrudalunoComponent } from './crudaluno/crudaluno.component';
import { ListaalunoComponent } from './listaaluno/listaaluno.component';
import { DetalhesalunoComponent } from './detalhesaluno/detalhesaluno.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,PanelModule,
    AlunoRoutingModule,
    DataTableModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,
    DataTableModule,SharedModule,InputTextModule
  ],
  declarations: [ CrudalunoComponent, ListaalunoComponent, DetalhesalunoComponent]
})
export class AlunoModule { }