import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSearchAlbums } from './dataSearchAlbums';
import { Album } from './album';
import { DataSearchTrack } from './dataSearchTrack';
import { Track } from './track';
import { Artist } from './artist';
import { DataSearchArtists } from './dataSearchArtists';
import { Tracks } from './Tracks';

/*
  Generated class for the DeezerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DeezerServiceProvider Provider');
  }

  getArtistes(s:string):Promise<Artist[]>{  
    
    const url:string ='http://api.deezer.com/search/artist?q='+encodeURI(s);
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(url, {headers: headers}).subscribe(data => {
       let json: DataSearchArtists = data as DataSearchArtists;
       resolve(json.data);
      
      },err =>{
        console.log(err);
      });
    });
  }

  getAlbums(artist:Artist):Promise<Album[]>{
    const url:string ='http://api.deezer.com/search/album?q='+artist.name;
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(url, {headers: headers}).subscribe(data => {
       let json: DataSearchAlbums = data as DataSearchAlbums;
       resolve(json.data);
      
      },err =>{
        console.log(err);
      });
    });
  }

  getTracks(album:Album):Promise<Track[]>{
    const url:string ='https://api.deezer.com/album/'+album.id+'/tracks';
    console.log(url);
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(url, {headers: headers}).subscribe(data => {
       let json: Tracks = data as Tracks;
       resolve(json.data);
      
      },err =>{
        console.log(err);
      });
    });
  }
}
