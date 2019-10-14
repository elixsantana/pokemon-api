import { Component, OnInit } from "@angular/core";
import { FetchService } from "./fetch.service";
import { Pokemon } from "./components/pokemon/pokemon.model";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "pokemon-api";

  // public pokemons: Pokemon[] = [];

  // constructor(public json: FetchService) {
  //   this.json
  //     .getJson("https://pokeapi.co/api/v2/pokemon")
  //     .subscribe((res: any) => {
  //       this.pokemons.push({
  //         name: res.results[0].name,
  //         pokemonUrl: res.results[0].url
  //       } as Pokemon);
  //     });
  // }
}
