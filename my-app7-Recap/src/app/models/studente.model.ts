export class Studente {
  matricola: number
  nome: string
  cognome: string
  cdCorsi: string[]

  constructor(matricola: number, nome: string, cognome: string, cdCorsi: string[]) {
    this.matricola = matricola
    this.nome = nome
    this.cognome = cognome
    this.cdCorsi = cdCorsi
  }
}
