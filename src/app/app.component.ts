import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  meusTrabalhos = [
    { nome: 'Repositorio Nebular', desc: 'Repositorio com Nebular', status: 'primary' },
    { nome: 'PartiuIF', desc: 'Sistema de cadastro de bolsas', status: 'warning' },
    { nome: 'BibliONteca', desc: 'Sistema de gerenciamento de biblioteca', status: 'success' },
    { nome: 'IFConnect', desc: 'Sistema de conexão entre alunos e professores', status: 'success' },
    { nome: 'Artisan', desc: 'Sistema E-commerce de artesanato', status: 'danger' },
    { nome: 'Prof.e', desc: 'Sistema de videoaulas', status: 'primary' },
  ];

  constructor(private themeService: NbThemeService) {}

  mudarTema(nome: string) {
    this.themeService.changeTheme(nome);
  }
  title = 'nebular-work';
}
