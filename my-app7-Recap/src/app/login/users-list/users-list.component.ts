import { Component, Input } from '@angular/core';
import { LoggedUser } from 'src/app/models/loggedUser.model';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() utente !: LoggedUser
  @Input() indice !: number

  constructor(private service: StudentiService) {}

  cambiaStato() {
    this.service.utentiLoggati[this.indice].status = !this.service.utentiLoggati[this.indice].status
    this.utente.status = this.service.utentiLoggati[this.indice].status

    if (this.utente.status) {

      this.service.utentiLoggati[this.indice].nTimesOnline++
      this.utente.nTimesOnline = this.service.utentiLoggati[this.indice].nTimesOnline

    } else {

      this.service.utentiLoggati[this.indice].nTimesOffline++
      this.utente.nTimesOffline = this.service.utentiLoggati[this.indice].nTimesOffline

    }
  }
}
