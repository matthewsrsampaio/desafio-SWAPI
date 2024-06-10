import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlanetComponent} from "./components/planet/planet.component";
import {CharactersComponent} from "./components/characters/characters.component";
import {FilmComponent} from "./components/film/film.component";
import {SpecieComponent} from "./components/specie/specie.component";
import {StarshipComponent} from "./components/starship/starship.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', redirectTo: '/home', pathMatch:'full'},
  {path: 'home',  component: HomeComponent},
  {path: 'planets', component: PlanetComponent, children: [{path: ':id', component: PlanetComponent}]},
  {path: 'characters', component: CharactersComponent},
  {path: 'films', component: FilmComponent, children: [{path: ':id', component: FilmComponent}]},
  {path: 'species', component: SpecieComponent},
  {path: 'starships', component: StarshipComponent},
  {path: 'vehicles', component: VehicleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
