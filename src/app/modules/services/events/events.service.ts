import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnvService } from 'src/app/env.service';
import { MarvelEvent, MarvelEventDataContainer, MarvelEventDataWrapper } from '../../characters/interfaces/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  readonly specificUrl:string = "/events";

  constructor(
    private http: HttpClient,
    private envSvc: EnvService
  ) { }

  getAll = ():Observable<Array<MarvelEvent>> =>  {
    return this.http.get<MarvelEventDataWrapper>( this.envSvc.apiUrl+ this.specificUrl).pipe(
      map((response: MarvelEventDataWrapper) => {
        return response.data;
      }),
      map((data: MarvelEventDataContainer) => {
        return data.results;
      })
    );
  }
}
