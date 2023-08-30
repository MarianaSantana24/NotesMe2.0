import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {

 @Input() nota = {
    conteudo: 'Angular é muito bom!',
    tipo: 'tipo1'
  }


}
