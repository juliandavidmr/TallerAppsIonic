import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  listado = ['Sesión 1', 'Sesión 2', 'Sesión 3']
  
  constructor(public navCtrl: NavController) {

  }

}
