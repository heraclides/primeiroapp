import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contatos: any;

  constructor(public navCtrl: NavController , public servidor: AuthProvider) {
    
  }

 

}
