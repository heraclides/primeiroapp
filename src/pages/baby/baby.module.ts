import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyPage } from './baby';

@NgModule({
  declarations: [
    BabyPage,
  ],
  imports: [
    IonicPageModule.forChild(BabyPage),
  ],
})
export class BabyPageModule {}
