import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search() {
    console.log('Realizando pesquisa...');
    // Adicionar lógica de pesquisa aqui
  }
}
