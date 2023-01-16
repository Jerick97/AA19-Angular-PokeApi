import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  pokemonList: any[] = [] //Almacenara la información de los pokemon recibidos
  constructor(private dataPokemon : PokemonService) { }

  ngOnInit(): void {
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
        }
      );
    }

  }

}
