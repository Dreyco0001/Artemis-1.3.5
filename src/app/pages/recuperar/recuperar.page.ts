import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  //variable:
  email: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  async recuperar(){
    if(await this.usuarioService.recuperar(this.email)){
      alert("Revisa tu correo para encontrar la nueva contraseña!")
      this.router.navigate(['/Iniciar_sesion']);
    }else{
      alert("ERROR! el usuario no existe!")
    }
  }
}
