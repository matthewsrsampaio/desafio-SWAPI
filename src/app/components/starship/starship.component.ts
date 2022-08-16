import { Component, OnInit } from '@angular/core';
import { Starship } from "../../models/startship";
import {ServiceServices} from "../../service.services";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starships: Starship[] = [];
  displayedColumns: string[] = ['name', 'model', 'mglt', 'cargo', 'consumable', 'cost', 'crew', 'hyperdrive', 'length', 'manufacturer', 'atmSpeed', 'passengers', 'created','edited'];
  dataSource = new MatTableDataSource(this.starships);
  clickedRows = new Set<Starship>();

  constructor(private serviceServices : ServiceServices, public http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.onGetAllStarships();
  }

  onGetAllStarships() {
    this.serviceServices.getAllStarships()
      .subscribe((data) => {
        this.starships = data.results;
        console.log(this.starships);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
