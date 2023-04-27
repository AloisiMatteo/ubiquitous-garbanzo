import { Component, Output, EventEmitter } from '@angular/core';
import { LoggedUser } from 'src/app/models/loggedUser.model';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onLoggaStudente = new EventEmitter<LoggedUser[]>()
  username!: string
  status: boolean = false

  constructor(private studentiService: StudentiService) {}
  onLoggaUser() {
    this.studentiService.utentiLoggati.push({
      username: this.username,
      status: this.status,
      nTimesOnline: 0,
      nTimesOffline: 0
    })
    this.onLoggaStudente.emit(this.studentiService.utentiLoggati);
  }
}
