import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharactersService } from '../../services/characters/characters.service';
import { CharactersFilter, MarvelCharacterDataContainer, MarvelCharactersPagination } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  pagination: MarvelCharactersPagination = {
    characters: [],
    pageSize: 20,
    currentPage: 0,
    totalCharacters: 0
  };
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 20,
    length: 0
  };
  filter: CharactersFilter = {
    text: "",
    selectedEvent: ""
  };


  constructor(
    private charactersSvc: CharactersService
  ) { }

  ngOnInit(): void {
    this.getServerData();
  }

  handleFilterChanged(receivedFilter:CharactersFilter){
    this.filter = receivedFilter;
    this.pageEvent.pageIndex = 0;
    this.getServerData(this.charactersSvc.createCharactersHttpParams(this.filter, this.pageEvent));
  }

  handlePage(event:PageEvent){
    this.pageEvent = event;
    this.getServerData(this.charactersSvc.createCharactersHttpParams(this.filter, this.pageEvent));
  }

  getServerData(params?: HttpParams){
    this.charactersSvc.getAll(params).subscribe(
      (response: MarvelCharacterDataContainer) =>{
          this.pagination.characters = response.results;
          this.pagination.currentPage = response.offset;
          this.pagination.pageSize = response.limit;
          this.pagination.totalCharacters = response.total;
      },
      error =>{
        alert("An error Ocurred");
      }
    );
  }


}
