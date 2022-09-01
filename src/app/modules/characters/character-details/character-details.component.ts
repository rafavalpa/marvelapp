import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters/characters.service';
import { MarvelCharacter } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  private routeSub!: Subscription;
  character$!: Observable<MarvelCharacter>;

  constructor(
    private route: ActivatedRoute,
    private charactersSvc: CharactersService
  ) { }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.character$ = this.charactersSvc.getOne(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
