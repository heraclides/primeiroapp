import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, Alert, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  

  email : string;
  senha : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public servidor: AuthProvider, 
    public alertCtrl: AlertController, public http: Http) {
    this.servidor.urlGet();
  }
     

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
     
  }

  gotoTabsPage(){
    this.navCtrl.push(TabsPage)
  }

  logIn() {
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }

  logar(){
    if (this.email == undefined || this.senha == undefined ){
     let alert = this.alertCtrl.create({
       title :'Atenção',
       message: 'Preencha todos os dados',
       buttons : ['ok']
        
     })
     alert.present( );
    }else{
       this.http.get(this.servidor.urlGet()+'usuario.php/?email='+this.email+'&senha='+this.senha).pipe(map(res => res.json()))
       .subscribe(
         dados => {
           if(dados.msg.logado == 'sim'){

            if(dados.dados.status == 'ativo'){
               
              this.navCtrl.push(TabsPage);
            }else{
              let alert = this.alertCtrl.create({
                title: 'Atenção',
                 message: 'Usuario sem permissão', 
                 buttons: ['ok']
              })
              alert.present();

            }


             
           }else{
             let alert = this.alertCtrl.create({
               title: 'Atenção',
                message: 'E-mail ou Senha Invalidos', 
                buttons: ['ok']
             })
             alert.present();
           }

         }
       )
    }
  }
}