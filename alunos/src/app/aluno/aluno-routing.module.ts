import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudalunoComponent} from './crudaluno/crudaluno.component';
import { DetalhesalunoComponent } from './detalhesaluno/detalhesaluno.component';
import { ListaalunoComponent } from './listaaluno/listaaluno.component';

const routes: Routes = [
    {
    path:'aluno',component:CrudalunoComponent,
    children:[
      { path: '',component:ListaalunoComponent},
      { path: 'detalhes/:id',component:DetalhesalunoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
