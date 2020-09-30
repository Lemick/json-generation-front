import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IconsProviderModule} from './icons-provider.module';
import {
  fr_FR,
  NZ_I18N,
  NzButtonModule,
  NzCardModule,
  NzDrawerModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzLayoutModule,
  NzMenuModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {JsonEditComponent} from './pages/json-edit/json-edit.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {HelpWindowComponent} from './pages/help-window/help-window.component';
import {AboutComponent} from './pages/about/about.component';

registerLocaleData(fr);


@NgModule({
  declarations: [
    AppComponent,
    JsonEditComponent,
    HelpWindowComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    IconsProviderModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzInputModule,
    NzDrawerModule,
    MonacoEditorModule.forRoot(),
    NzCardModule,
    NzInputNumberModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
