import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  info: any = {}

  constructor(
    public navCtrl: NavController, 
    public params: NavParams) {

    this.info = this.params.get('datos');
    console.log(this.info)
  }

}