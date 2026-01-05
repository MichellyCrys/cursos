import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { FormsModule } from '@angular/forms';
import { ListarPensamento } from './componentes/pensamentos/listar-pensamento/listar-pensamento';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Cabecalho,
    Rodape,
    CriarPensamento,
    FormsModule,
    ListarPensamento
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
