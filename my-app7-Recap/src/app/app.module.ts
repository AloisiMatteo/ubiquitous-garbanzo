import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneComponent } from './gestione/gestione.component';
import { GestioneStudentiComponent } from './gestione/gestione-studenti/gestione-studenti.component';
import { StudentiIscrittiComponent } from './gestione/gestione-studenti/studenti-iscritti/studenti-iscritti.component';
import { StudenteInfoComponent } from './gestione/gestione-studenti/studente-info/studente-info.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { UsersListComponent } from './login/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneComponent,
    GestioneStudentiComponent,
    StudentiIscrittiComponent,
    StudenteInfoComponent,
    LoginFormComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
