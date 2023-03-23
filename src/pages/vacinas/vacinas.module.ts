import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacinasPage } from './vacinas';

@NgModule({
  declarations: [
    VacinasPage,
  ],
  imports: [
    IonicPageModule.forChild(VacinasPage),
  ],
})
export class VacinasPageModule {}
