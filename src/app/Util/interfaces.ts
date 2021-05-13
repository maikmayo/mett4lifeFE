/* Interfaces */
/** Definition des Bestellungen-Objektes als ganzes */
export interface bestellungenDefinition {
  alleBestellungenInfos: alleBestellungenInfos;
  bestellungProPerson: bestellungProPersonDefinition[];
}

/** Definition aller Bestellungen einer Person  */
export interface bestellungProPersonDefinition {
  personID: number;
  kuerzel: string;
  bestellungen: bestellungDetailDefinition[];
}

/** Definition einer einzelnen Bestellung */
export interface bestellungDetailDefinition {
  mettID: number;
  datum: string;
  anzahl: number;
  bezahlt: boolean;
  ohneMett: boolean;
}

/** Definition der Metainformationen zu allen Bestellungen */
export interface alleBestellungenInfos {
  startingDate: string;
  amountOfDates: number;
  dates: mettdate[];
}

/** Definition einer Spaltenvorlage */
export interface columnDefinition {
  field: string;
  header: string;
}

/** Definition eines Mett-Datums */
export interface mettdate {
  mettwochID: number;
  datum: string;
}

/** Definition eine */
export interface bestellungDetailInformation {
  mettID: number;
  personID: number;
  datum: string;
  anzahl: number;
  bezahlt: boolean;
  ohneMett: boolean;
}
