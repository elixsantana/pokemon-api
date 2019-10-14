import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

@NgModule({
  declarations: [AppComponent, PokemonComponent, PokeDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
