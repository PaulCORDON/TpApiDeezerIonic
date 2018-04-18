import { Component } from '@angular/core';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { NavParams, NavController } from 'ionic-angular';
import { Artist } from '../../providers/deezer-service/artist';
import { Album } from '../../providers/deezer-service/album';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

      
      readonly TAG:string = 'HomePage'
      searchQuery: string = '';
      listArtist: Artist[];
      listAlbum:Album[];
      constructor(public deezerService:DeezerServiceProvider,
                  public navParams:NavParams,
                  public navCtrl:NavController) {
      }
  
    
      onSearchArtist(ev: any){
        let val = ev.target.value;
        console.log(`${this.TAG} val: ${val}`);
        this.deezerService.getArtistes(val)
        .then( (rep) => {
          console.log(`${this.TAG} rep: ${JSON.stringify(rep)}`);
          this.listArtist = rep;
         })
        .catch((err) => {
          console.log(`${this.TAG} err: ${JSON.stringify(err)}`);
        });
      }

      onClickArtist(artist:Artist) {
        console.log(`${this.TAG} OnClickArtist: ${JSON.stringify(artist)}`);
        this.deezerService.getAlbums(artist)
        .then( (rep) => {
          console.log(`${this.TAG} rep: ${JSON.stringify(rep)}`);
          this.listAlbum = rep;
          console.log(`${this.TAG} ${this.listAlbum[1].id}`);
          this.navCtrl.push('PageAlbumPage',{
            listAlbum: this.listAlbum          
          });
         })
        .catch((err) => {
          console.log(`${this.TAG} err: ${JSON.stringify(err)}`);
        });
        
      }

    

}
