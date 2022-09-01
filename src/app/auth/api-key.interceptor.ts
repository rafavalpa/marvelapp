
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from '../env.service';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor(private envSvc: EnvService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const params = request.params.append("apikey", this.envSvc.apiKey);
    return next.handle(request.clone(
        {
          url: request.url,
          params
        }
      ));

  }
}
