import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Track } from '../../providers/deezer-service/track';
import { Album } from '../../providers/deezer-service/album';

/**
 * Generated class for the PageTracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-tracks',
  templateUrl: 'page-tracks.html',
})
export class PageTracksPage {
  public listTrack: Track[];
  public album:Album;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listTrack=this.navParams.get("listTrack");
    this.album=this.navParams.get("album");
    console.log(this.listTrack);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageTracksPage');
  }

}
