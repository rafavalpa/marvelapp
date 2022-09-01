import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable } from 'rxjs';
import { EnvService } from 'src/app/env.service';
import { CharactersFilter, MarvelCharacter, MarvelCharacterDataContainer, MarvelCharacterDataWrapper } from '../../characters/interfaces/marvel.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  readonly specificUrl:string = "/characters";

  constructor(
    private http: HttpClient,
    private envSvc: EnvService
  ) { }

  getAll = (params?: HttpParams):Observable<MarvelCharacterDataContainer> =>  {
    return this.http.get<MarvelCharacterDataWrapper>( this.envSvc.apiUrl+ this.specificUrl, {params}).pipe(
      map((response: MarvelCharacterDataWrapper) => {
        return response.data;
      })
    );
  }

  getOne = (characterId: number):Observable<MarvelCharacter> =>  {
    return this.http.get<MarvelCharacterDataWrapper>( this.envSvc.apiUrl+ this.specificUrl + '/' + characterId).pipe(
      map((response: MarvelCharacterDataWrapper) => {
        return response.data;
      }),
      map((data:MarvelCharacterDataContainer) => {
        return data.results[0];
      }),
    )
  }

  createCharactersHttpParams(filter?:CharactersFilter, event?:PageEvent){
    let params = new HttpParams();

    if(event){
      params = params.append("limit", event!.pageSize);
      params = params.append("offset", event!.pageIndex);
    }

    if(filter!.text.length>0){
      params = params.append("nameStartsWith", filter!.text);
    }
    if(filter!.selectedEvent.length>0){
      params = params.append("events", filter!.selectedEvent);
    }

    return params;
  }
}
