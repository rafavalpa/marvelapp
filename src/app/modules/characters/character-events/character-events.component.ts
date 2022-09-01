import { Component, Input, OnInit } from '@angular/core';
import { MarvelEventSummary } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-character-events',
  templateUrl: './character-events.component.html',
  styleUrls: ['./character-events.component.scss']
})
export class CharacterEventsComponent implements OnInit {
  @Input() events!: MarvelEventSummary[];

  constructor() { }

  ngOnInit(): void {
  }

}
