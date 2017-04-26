import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DetallePage } from "../detalle/detalle";

import { FotosApi } from "../../providers/fotos-api";

@Component({
  selector: 'page-album',
  templateUrl: 'album.html'
})
export class AlbumPage {

  fotos: any = []
  fotos_aux: any = []
  texto: string = ''

  constructor(
    public navCtrl: NavController,
    public api: FotosApi) {

    this.api.getInfo().then(resultado => {
      console.log("Albums: ", resultado)

      this.fotos = resultado
      this.fotos_aux = resultado
    })
  }

  /**
   * Redirecciona a la pagina detalle
   * @param imag Información
   */
  abrirDetalle(imag: any) {
    this.navCtrl.push(DetallePage, { 
      datos: imag 
    })
  }

  buscar() {
    this.fotos = this.fotos_aux

    this.fotos = this.fotos.filter(val => JSON.stringify(val).toLowerCase().indexOf(this.texto.toLowerCase()) !== -1)
  }
}