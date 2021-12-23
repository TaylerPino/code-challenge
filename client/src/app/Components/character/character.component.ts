import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  filmColumns: string[] = ['title', 'director', 'producer', 'release_date'];
  speciesColumns: string[] = ['name', 'average_lifespan', 'classification', 'language'];
  character: Person = new Person();
  displayIcon: string = '';
  shouldDisplay: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ){
    route.params.subscribe(() => {
      this.getCharacter();
  });}

  ngOnInit(): void {
  }

  getCharacter(){
    this.shouldDisplay = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id!= 0){
      this.displayIcon = `../../../assets/${id}.jpg`;
      this.dataService.getPerson(id)
        .subscribe(person => {
          this.character = person;
          this.shouldDisplay = true;
        });
    }
  }

}
