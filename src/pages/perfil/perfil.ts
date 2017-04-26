import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from "ionic-angular";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  constructor(
    public navCtrl: NavController, 
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

  /**
   * Mostrar alerta
   */
  mostrarAlerta() {
    let a = this.alert.create({
      title: 'Titulo de la alerta',
      subTitle: 'Hola....',
      buttons: ['OK']
    })
    a.present();
  }

}
