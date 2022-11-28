import { AuthService } from 'src/app/services/auth-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
 import { Storage } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthTokenInterceptor } from './interceptors/auth.token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [HttpClient,Storage,AuthService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true,
  }
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
