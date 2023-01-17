import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  constructor(private route:ActivatedRoute,private dataPokemon:PokemonService) { }
  public pokemon : any = [];
  colors = ['bg-stone-500', 'bg-stone-700', 'bg-blue-500','bg-lime-600','bg-gray-400','bg-red-500','bg-sky-500','bg-purple-500','bg-blue-700','bg-yellow-500','bg-violet-400','bg-green-500', 'bg-indigo-400','bg-blue-300','bg-gray-200'];
  response = '';
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //almacena el pokemon buscado obtenido por la url, el nombre o id
    this.detallePokemon(id); //se lo pasamos al método
  }

  detallePokemon(id:any){
    this.dataPokemon.filterPokemon(id).subscribe(
        resultado => {
          this.pokemon = {
            id: resultado.id,
            name: resultado.name,
            image: resultado.sprites.front_default,
            types: resultado.types,
            height: resultado.height,
            weight: resultado.weight
          };
          this.response = resultado;
        },
        error => { 
          console.log(error);
          this.response = 'not found';
        });
  }

  //Añadir color de fondo al div detalle

  getColor(condition: string) {
    switch (condition) {
      case 'ground':
        return this.colors[0]
        break;
      case 'rock':
        return this.colors[1]
        break;
      case 'water':
        return this.colors[2]
        break;
      case 'bug':
        return this.colors[3]
        break;
      case 'steel':
        return this.colors[4]
        break;
      case 'fire':
        return this.colors[5]
        break;
      case 'ice':
        return this.colors[6]
        break;
      case 'fairy':
        return this.colors[7]
        break;
      case 'dragon':
        return this.colors[8]
        break;
      case 'electric':
        return this.colors[9]
        break;
      case 'psychic':
        return this.colors[10]
        break;
      case 'grass':
        return this.colors[11]
        break;
      case 'poison':
        return this.colors[12]
        break;
      case 'flying':
        return this.colors[13]
        break;
      case 'Normal':
        return this.colors[14]
        break;
      default:
        return this.colors[14]
    }
  }
}
