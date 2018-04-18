import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageTracksPage } from './page-tracks';

@NgModule({
  declarations: [
    PageTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(PageTracksPage),
  ],
})
export class PageTracksPageModule {}
