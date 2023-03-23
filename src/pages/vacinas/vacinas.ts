import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the VacinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacinas',
  templateUrl: 'vacinas.html',
})
export class VacinasPage {

  contatos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor : AuthProvider) {
   this.getRetornar(); 

  }

   getRetornar(){
     this.servidor.getPegar()
     .subscribe(
       data => this.contatos = data,
       err => console.log(err)

     );
   }
}
