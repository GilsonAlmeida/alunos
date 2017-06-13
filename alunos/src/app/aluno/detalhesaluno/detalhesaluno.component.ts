import { Component, OnInit } from '@angular/core';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from './../../aluno.service';

@Component({
  selector: 'app-detalhesaluno',
  templateUrl: './detalhesaluno.component.html',
  styleUrls: ['./detalhesaluno.component.css']
})
export class DetalhesalunoComponent extends SuperDetalhes implements OnInit {

   constructor(service:AlunoService,router:Router, route:ActivatedRoute) { 
    super(service,router,route);
  }
  ngOnInit() {
  }

}
