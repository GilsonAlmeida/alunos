import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

export class SuperDetalhes {


  selecionado = {};
  items = [
    {
      label: 'Cancelar', icon: 'fa-close', command: () => {
        this.cancelar();
      }
    }];

    

  constructor(protected service,protected router: Router,protected route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getOne(params['id']))
      .subscribe((objeto) => {
        console.log(objeto);
        this.selecionado = objeto;
      });
  }

  cancelar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  salvar() {
    console.log("SALVAR SERVICE"+ this.selecionado)
    this.service.add(this.selecionado)
      .then((data) => this.router.navigate(['../..'], { relativeTo: this.route }));


  }


}