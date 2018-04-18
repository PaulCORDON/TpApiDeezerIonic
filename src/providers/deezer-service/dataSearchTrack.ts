import { Artist } from "./artist";
import { Track } from "./track";
import { Tracks } from "./Tracks";


export class DataSearchTrack {
    constructor(){

    }
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    genre_id: number;    
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    rating: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    artist: Artist;
    type: string;
    tracks: Tracks;
}
