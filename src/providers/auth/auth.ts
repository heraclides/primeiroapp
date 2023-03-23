import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/Operators';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  url: string = "http://localhost/teste/";
  static getPegar: any;
  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  urlGet(){
    return this.url
  }


  getPegar(){
    return this.http.get(this.url+"teste.php").pipe(map(res => res.json()));
  }
}
