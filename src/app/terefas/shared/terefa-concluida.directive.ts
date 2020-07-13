import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
  selector: '[terefaConcluida]'
})
export class TerefaConcluidaDirective implements OnInit{
  @Input() terefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if (this.terefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
