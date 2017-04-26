import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FotosApi {

  constructor(public http: Http) {
    console.log('Hello FotosApi Provider');
  }

  getInfo() {
    return new Promise((resolve, reject) => {
      this.http.get('http://172.20.1.111:3000/fotos')
        .map(res => res.json())
        .subscribe(data => {
          return resolve(data)
        })
    })
  }

}
