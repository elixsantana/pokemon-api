import { Component, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { FetchService } from "../../fetch.service";

@Component({
  selector: "pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent {
  public pokemons: Pokemon[] = [];

  constructor(public json: FetchService) {}

  getAllPokemons(): void {
    this.pokemons = [];

    this.json
      .getJson("https://pokeapi.co/api/v2/pokemon")
      .subscribe((res: any) => {
        let counter = 1;

        res.results.forEach(pokemon => {
          this.pokemons.push({
            name: pokemon.name,
            pokemonUrl: pokemon.url,
            id: counter++
          } as Pokemon);
        });
      });
  }

  getPokemonDetails(id: number | string): void {
    this.json
      .getJson("https://pokeapi.co/api/v2/pokemon/" + id)
      .subscribe((res: any) => {
        let foundPokemon = this.pokemons.find(x => {
          return x.id === id;
        });

        foundPokemon.details = res;
      });
  }

  clearAll(): void {
    this.pokemons = [];
  }
}
