import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonShort } from './models/PersonShort';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars Characters';

  people: Observable<PersonShort[]> | undefined;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.people = this.dataService.getPeople();
  }
}
