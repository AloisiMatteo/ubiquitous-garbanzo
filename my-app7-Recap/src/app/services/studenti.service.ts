import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';
import { LoggedUser } from '../models/loggedUser.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
  mieiStudenti: Studente[] = [
    new Studente(1, 'Laura', 'Bianchi', ['Angular', 'Java0', 'HTCS3']),
    new Studente(2, 'Paolo', 'Bianchi', ['Angular', 'Java0', 'HTCS3']),
    new Studente(3, 'Maria', 'Bianchi', ['Angular', 'Java0', 'HTCS3']),
    new Studente(4, 'Marco', 'Bianchi', ['Angular', 'Java0', 'HTCS3']),
    new Studente(5, 'Luisa', 'Bianchi', ['Angular', 'Java0', 'HTCS3']),
  ]
  utentiLoggati: LoggedUser[] = []

  constructor() { }

  descriviStudente(matricola: number): Studente {
    let indice = matricola -1;
    let mioStudente = this.mieiStudenti[indice]

    return mioStudente
  }
}
