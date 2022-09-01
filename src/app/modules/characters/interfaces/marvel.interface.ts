import { PageEvent } from "@angular/material/paginator";

export class MarvelUrl {
  "type": string;
  "url":string;
}

export class MarvelImage {
  "path":string;
  "extension":string;
}

export class MarvelComicSummary {
  "resourceURI": string;
  "name": string;
}

export class MarvelComicList {
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelComicSummary>;
}

export class MarvelStorySummary {
  "resourceURI": string;
  "name": string;
  "type": string;
}

export class MarvelStoryList {
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelStorySummary>;
}

export class MarvelEventSummary {
  "resourceURI": string;
  "name": string;
}

export class MarvelEventList{
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelEventSummary>;
}

export class MarvelSeriesSummary {
  "resourceURI": string;
  "name": string;
}

export class MarvelSeriesList {
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelSeriesSummary>;
}

export class MarvelCharacterSummary {
  "resourceURI": string;
  "name": string;
  "role": string;
}

export class MarvelCharacterList {
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelCharacterSummary>;
}

export class MarvelCreatorSummary {
  "resourceURI": string;
  "name": string;
  "role": string;
}

export class MarvelCreatorList {
  "available":number;
  "returned": number;
  "collectionURI":string;
  "items": Array<MarvelCharacterSummary>;
}

export class MarvelCharacter {
  "id":number;
  "name": string;
  "description": string;
  "modified": Date;
  "resourceURI":string;
  "urls": Array<MarvelUrl>;
  "thumbnail": MarvelImage;
  "comics": MarvelComicList;
  "stories": MarvelStoryList;
  "events": MarvelEventList;
  "series": MarvelSeriesList;
}

export class MarvelCharacterDataContainer {
  "offset": number;
  "limit": number;
  "total": number;
  "count": number;
  "results": Array<MarvelCharacter>;
}

export class MarvelCharacterDataWrapper {
  "code": number;
  "status": string;
  "copyright": string;
  "attributionText": string;
  "attributionHTML": string;
  "data": MarvelCharacterDataContainer;
  "etag": string;
}

export class MarvelEvent {
  "id":number;
  "title": string;
  "description": string;
  "resourceURI":string;
  "urls": Array<MarvelUrl>;
  "modified": Date;
  "start": Date;
  "end": Date;
  "thumbnail": MarvelImage;
  "comics": MarvelComicList;
  "stories": MarvelStoryList;
  "series": MarvelSeriesList;
  "characters": MarvelCharacterList;
  "creators": MarvelCreatorList;
  "next": MarvelEventSummary;
  "previous": MarvelEventSummary;
}

export class MarvelEventDataWrapper {
  "code": number;
  "status": string;
  "copyright": string;
  "attributionText": string;
  "attributionHTML": string;
  "data": MarvelEventDataContainer;
  "etag": string;
}

export class MarvelEventDataContainer {
  "offset": number;
  "limit": number;
  "total": number;
  "count": number;
  "results": Array<MarvelEvent>;
}

export class CharactersFilter{
  "text": string;
  "selectedEvent": string;
}

export class MarvelCharactersPagination{
  "characters": MarvelCharacter[];
  "pageSize":number;
  "currentPage":number;
  "totalCharacters": number;
}

