import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sss',
  templateUrl: 'about.html'
})
export class AboutPage {

  listado = ['Sesión 1', 'Sesión 2', 
  'Sesión 3', 'Hola']

  constructor(public navCtrl: NavController) {

  }

  AddItem() {
    this.listado.push('Nuevo');
  }

  Quitar() {
    this.listado.pop()
  }
  a() {
    this.listado = this.listado.reverse()
  }

}
