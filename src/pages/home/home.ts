import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface IMensaje {
  contenido: string | number
  fecha?: Date
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  texto: string = ''

  lista: IMensaje[] = []

  constructor(public navCtrl: NavController) {}

  addMensaje() {
    this.lista.push({
      contenido: this.texto,
      fecha: new Date()
    })
  }

}
