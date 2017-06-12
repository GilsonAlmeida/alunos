import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';
import { AlunoService } from './../../aluno.service';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaalunoComponent extends SuperLista implements OnInit {

    constructor(service:AlunoService, router:Router, route: ActivatedRoute) {
      super(service,router,route);
      this.cols = [ {field: 'nome', header: 'Nomes'}, {field: 'version', header: 'Versão'} ];
    

   }


}
