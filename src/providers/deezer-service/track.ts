export class Track {
    constructor(){
    }   
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    preview: string;
    artist: Artist2;
    type: string;
 }
 class Artist2 {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  }