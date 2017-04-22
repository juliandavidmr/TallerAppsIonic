import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = []
  email: string = ''
  passw: string = ''

  constructor(public navCtrl: NavController) {

  }

  add() {
    this.lista.push(this.email)
  }

  remove(i: number) {
    this.lista = this.lista.filter((val, index) => i !== index)
  }

}
