import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';



@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    DataTableModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,
    DataTableModule,SharedModule,InputTextModule
  ],
  declarations: [CrudComponent, ListaComponent, DetalhesComponent]
})
export class CursoModule { 

 constructor(){
     console.log("CategoriaModule");
 }

}
