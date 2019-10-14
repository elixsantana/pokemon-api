import { Component, OnInit, Input } from "@angular/core";
import { Details } from "./poke-details.model";
import { FetchService } from "../../fetch.service";

@Component({
  selector: "poke-details",
  templateUrl: "./poke-details.component.html",
  styleUrls: ["./poke-details.component.scss"]
})
export class PokeDetailsComponent {
  public theDetails: Details[] = [];

  @Input() public details: any;

  constructor(public json: FetchService) {}

  clear(): void {
    this.details = [];
  }
}
