import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2' //Url de la Api
  pokemonList: any[] = []; //almacena el pokemon obtenido por el filtrado
  constructor(private http: HttpClient) { }

  //Método para obtener los Pokemon
  getPokemon(index:number){ //recibirá el id del pokemon
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)//esto nos devuelve la información del pokemon
  }

  //filtrar pokemon por id y por nombre
  filterPokemon(search:string){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${search}`)
  }

}
