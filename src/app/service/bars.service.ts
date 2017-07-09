import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BarsService {

  constructor(private _http:Http) { }

  getData () {
      return this._http.get('http://pb-api.herokuapp.com/bars').map(response => response.json());
  }
}
