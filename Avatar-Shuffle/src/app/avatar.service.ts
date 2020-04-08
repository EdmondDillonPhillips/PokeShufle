import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from './avatar.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  pokeApiUrl: string = "http://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

    getAvatar(){
      return this.http.get( this.pokeApiUrl + this.generateRandomPokemonNumber() );
    }

    generateRandomPokemonNumber(){
      return Math.round(150*Math.random()).toString();
    }
}
