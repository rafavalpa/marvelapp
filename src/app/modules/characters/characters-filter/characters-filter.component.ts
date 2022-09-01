import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/events/events.service';
import { CharactersFilter, MarvelEvent } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-characters-filter',
  templateUrl: './characters-filter.component.html',
  styleUrls: ['./characters-filter.component.scss']
})
export class CharactersFilterComponent implements OnInit {
  events$!: Observable<MarvelEvent[]>;
  @Input() filter!:CharactersFilter;
  @Output() reloadCharacters = new EventEmitter();

  constructor(
    private eventsSvc: EventsService
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventsSvc.getAll();
  }

  handleTextFilterChange(event: Event) {
    this.filter.text =  (event.target as HTMLInputElement).value;
  }

  handleFilterClick(){
    this.reloadCharacters.emit({
      text: this.filter.text,
      selectedEvent: this.filter.selectedEvent
    });
  }

}
