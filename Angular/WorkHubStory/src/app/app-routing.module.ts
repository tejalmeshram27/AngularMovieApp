import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafetariaAdminComponent } from '../components/cafetaria-admin/cafetaria-admin.component';
import { AppComponent } from './app.component';
import { authGuard } from 'src/auth/auth.guard';
import { LibraryAdminComponent } from '../components/library-admin/library-admin.component';
import { ScrollbarComponent } from 'src/components/scrollbar/scrollbar.component';
import { TrialComponent } from 'src/components/trial/trial.component';


const routes: Routes = [
  { path:'cafetariaadmin', canActivate:[authGuard], component: CafetariaAdminComponent},
  {path:'*', component: AppComponent},
  {path:'libraryadmin', component: LibraryAdminComponent },
  {path:'scrollbar', component: ScrollbarComponent  },
  {path: 'trial', component: TrialComponent}

  // {path:'', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
