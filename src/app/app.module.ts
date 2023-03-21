import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { FetchApiInterceptor } from './interceptor/fetch-api.interceptor';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { FormsModule } from '@angular/forms';
import { EditUpdateComponent } from './edit-update/edit-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    PopupFormComponent,
    EditUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule, PagerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FetchApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
