import { Component } from '@angular/core';


@Component({
  selector: 'app-forma-usuario',
  templateUrl: './forma-usuario.component.html',
  styleUrls: ['./forma-usuario.component.css']
})
export class FormaUsuarioComponent {
  username: string = '';
  password: string = '';
}
