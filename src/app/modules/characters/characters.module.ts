import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterEventsComponent } from './character-events/character-events.component';
import { CharacterEventComponent } from './character-event/character-event.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersFilterComponent } from './characters-filter/characters-filter.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterEventsComponent,
    CharacterEventComponent,
    CharacterDetailsComponent,
    CharactersFilterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
