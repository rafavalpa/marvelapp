import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './modules/shared/navigation/header/header.component';
import { SidenavListComponent } from './modules/shared/navigation/sidenav-list/sidenav-list.component';
import { SharedModule } from './modules/shared/shared.module';
import { ApiKeyInterceptor } from './auth/api-key.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CharactersModule } from './modules/characters/characters.module';
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 60, // cache expire after 60 seconds,
  allowedMethod: ['GET'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CharactersModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
