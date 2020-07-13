import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Terefa, TerefaService } from '../shared';

@Component({
  selector: 'app-editar-terefa',
  templateUrl: './editar-terefa.component.html',
  styleUrls: ['./editar-terefa.component.css']
})
export class EditarTerefaComponent implements OnInit {

  @ViewChild('formTerefa',  { static: true }) formTerefa: NgForm;
  terefa: Terefa;

  constructor(
    private terefaService: TerefaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; 
    this.terefa = this.terefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTerefa.form.valid) {
      this.terefaService.atualizar(this.terefa);
      this.router.navigate(['/terefas']);
    }
  }

}
