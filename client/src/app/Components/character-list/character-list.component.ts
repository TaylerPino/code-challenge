import { Component, Input, OnInit } from '@angular/core';
import { PersonShort } from 'src/app/models/PersonShort';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input('people') people: PersonShort[] | null = new Array<PersonShort>();

  constructor() { }

  ngOnInit(): void {
  }
}
