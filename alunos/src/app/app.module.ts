
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';  
import { CursoService } from './curso.service';
import { DisciplinaService } from './disciplina.service';
import { AlunoService } from './aluno.service';
import { CursoModule } from './curso/curso.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { AlunoModule } from './aluno/aluno.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursoModule,DisciplinaModule,AlunoModule,
    HttpModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule
  ],
  providers: [CursoService,AlunoService,DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
