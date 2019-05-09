import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialImportsModule } from './shared/material-imports.module';
import { AddFileModal } from './modals/add-file-modal/add-file-modal.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ClipboardModule } from 'ngx-clipboard';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LinksComponent } from './pages/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingComponent,
    SearchComponent,
    AddFileModal,
    FlipCardComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialImportsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    }),
    ImageCropperModule,
    ClipboardModule,
    AppRoutingModule
  ],
  providers: [
    HttpModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  entryComponents: [
    AddFileModal
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
