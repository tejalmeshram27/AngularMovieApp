import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
// import { TravelComponent } from './AngularLabTravel/travel.component';
import { ConverttoCharPipe } from './movie/convert-to.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CourseComponent } from './Online Course portal/couse.component';
import { StarComponent } from './shared/star-component/star-component.component';

import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { UserComponent } from './app/movie/user/user.component';

import { HttpClientModule } from "@angular/common/http";
import { MovieDetailsGuard } from './movie/movie-detail.guard';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    // TravelComponent,
    ConverttoCharPipe,
    StarComponent,

    // HomeComponent,
    MovieDetailComponent,
    UserComponent,
    CustomerComponent
    // CourseComponent

    
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ReactiveFormsModule,

    FormsModule,
    RouterModule.forRoot([
      
      // {path:'home',component:HomeComponent},
      {path:'movies',component:MovieComponent},

      {
        path:'movies/:id',
        component:MovieDetailComponent,
        canActivate:[MovieDetailsGuard]
      },
      {path:'register',component:UserComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
     
    ])
  ],   

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
