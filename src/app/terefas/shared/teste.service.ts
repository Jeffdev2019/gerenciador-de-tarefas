import { Injectable } from '@angular/core';

import { Terefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor() { }
  listarTodos(): Terefa[] {
    const terefas = localStorage['terefas'];
    return terefas ? JSON.parse(terefas) : []; //if ternario
  }

  cadastrar(terefa: Terefa): void{
    const terefas = this.listarTodos();
    terefa.id = new Date().getTime();
    terefas.push(terefa);
    localStorage['terefas'] = JSON.stringify(terefas);
  }

  buscarPorId(id: number): Terefa {
    const terefas: Terefa[] = this.listarTodos();
    return terefas.find(terefa => terefa.id === id);
  }

  atualizar(terefa: Terefa): void{
    const terefas: Terefa[] = this.listarTodos();
    terefas.forEach((obj, index, objs) =>{
      if (terefa.id === obj.id) {
        objs[index] = terefa;
      }
    });
    localStorage['terefas'] = JSON.stringify(terefas);
  }
  
  remover(id: number): void {
    let terefas: Terefa[] = this.listarTodos();
    terefas = terefas.filter(terefa => terefa.id !== id);
    localStorage['terefas'] = JSON.stringify(terefas);
  }

  alterarStatus(id: number): void{
    const terefas: Terefa[] = this.listarTodos();
    terefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluido = !obj.concluido;
      }
    });
    localStorage['terefas'] = JSON.stringify(terefas);
  }
}
