import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Album } from '../../providers/deezer-service/album';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { Track } from '../../providers/deezer-service/track';

/**
 * Generated class for the PageAlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-album',
  templateUrl: 'page-album.html',
})
export class PageAlbumPage {
  listTrack:Track[];
  listAlbum:Album[];
  readonly TAG:string = 'PageAlbum'
  constructor(public navCtrl: NavController, public navParams: NavParams,public deezerService:DeezerServiceProvider,) {
      this.listAlbum = this.navParams.get("listAlbum");
  }

  ionViewDidLoad() {
    console.log(`${this.TAG} ionViewDidLoad PageAlbumPage`);
    console.log(`${this.TAG} ${this.listAlbum[1].id}`);
  }
  onClickAlbum(album:Album){
    console.log(`${this.TAG} OnClickArtist: ${JSON.stringify(album)}`);
        this.deezerService.getTracks(album)
        .then( (rep) => {
          console.log(`${this.TAG} rep: ${JSON.stringify(rep)}`);
          this.listTrack = rep;
          console.log(`${this.TAG} ${this.listAlbum[1].id}`);
          this.navCtrl.push('PageTracksPage',{
            listTrack: this.listTrack, 
            album:album   
          });
         })
        .catch((err) => {
          console.log(`${this.TAG} err: ${JSON.stringify(err)}`);
        });
  }
}
