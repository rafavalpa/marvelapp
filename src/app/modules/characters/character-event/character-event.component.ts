import { Component, Input, OnInit } from '@angular/core';
import { MarvelEventSummary } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-character-event',
  templateUrl: './character-event.component.html',
  styleUrls: ['./character-event.component.scss']
})
export class CharacterEventComponent implements OnInit {
  @Input() event!: MarvelEventSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
