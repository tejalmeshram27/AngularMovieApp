import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafetariaAdminComponent } from '../components/cafetaria-admin/cafetaria-admin.component';
import { HeaderComponent } from '../components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibraryAdminComponent } from '../components/library-admin/library-admin.component';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

// import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    CafetariaAdminComponent,
    HeaderComponent,
    LibraryAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
