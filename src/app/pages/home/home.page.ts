import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  usuario: any;  

  constructor(private navController: NavController) {}

  ngOnInit(){
    this.usuario = JSON.parse(localStorage.getItem('Usuarios') || '');
    console.log(this.usuario)  }

  close(){
    localStorage.removeItem('usuarios');
    this.navController.navigateRoot('/login');
  }

}
