import { Component, Input, OnInit } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { MarvelCharacter } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character!:MarvelCharacter;

  constructor(private envSvc: EnvService) { }

  ngOnInit(): void {
  }

}
