import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  pokemonList: any[] = [] //Almacenara la información de los pokemon recibidos
  music:string='https://nuevotono.net/audios/mp3/5e5ad26ad8496.mp3';
  voice:string='https://nuevotono.net/audios/mp3/5e5ad2677ac2a.mp3';
  isPlaying = false;
  isLoading = false;

  constructor(private dataPokemon : PokemonService) { }

  ngOnInit(): void {
    this.isLoading = true;
    //en el inicio de ciclo del componente, llama al método obtenerPokemon()
    this.obtenerPokemon();
  }
  obtenerPokemon(){
    let pokemonObj = {}; //crearemos un objeto que tendrá las características del pokemon
    for(let i = 1; i <= 150; i++){ //Le iremos pasando el index de la primera generación de pokemon 150
      this.dataPokemon.getPokemon(i).subscribe( //llamamos al método de nuestro servicio, y le enviamos en cada iteración el index del pokemon
        resultado => {
          pokemonObj = {
            position : i, //la posición del pokemon en la pokedex
            image: resultado.sprites.front_default, //el sprite frontal del pokemon
            name: resultado.name //almacena el nombre del pokemon
          };
          //Almacenamos cada objeto pokemon creado en nuestro array pokemonList
          this.pokemonList.push(pokemonObj);
        },
        error => { 
          console.log(error) //en caso de un error, imprimirlo en la consola
        },
        //Cuando termine la petición, ordenamos de manera descendente todos los pokemon
        () => {
          this.pokemonList.sort((a, b) => a.position - b.position);
          this.isLoading=false;
        }
      );
    }
  }

  //Reproducir intro Pokemon
  playSound() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      let audio = new Audio;
      audio.src = this.music; 
      audio.load();
      audio.play();
      audio.onended = () => {
          this.isPlaying = false;
      }
  }
  }
//Reproducir batalla Pokemon
  playVoice(){
    if (!this.isPlaying) {
      this.isPlaying = true;
      let audio = new Audio;
      audio.src = this.voice; 
      audio.load();
      audio.play();
      audio.onended = () => {
          this.isPlaying = false;
      }
  }
}
}
