import { FormatterService } from './../../services/formatter.service';
import {
  BestellungService,
  mettBestellungDefinition,
} from './../../services/bestellung.service';
import { Component, OnInit } from '@angular/core';
import {
  alleBestellungenInfos,
  bestellungDetailInformation,
  bestellungenDefinition,
  bestellungProPersonDefinition,
  columnDefinition,
} from 'src/app/Util/interfaces';

@Component({
  selector: 'app-bestellen',
  templateUrl: './bestellen.component.html',
  styleUrls: ['./bestellen.component.scss'],
  providers: [],
})
export class BestellenComponent implements OnInit {
  public bestellungenProPerson!: bestellungProPersonDefinition[];
  public displayBestellungBearbeiten: boolean = false;
  public tableDateCols: columnDefinition[] = [];

  public dialogDetail: bestellungDetailInformation = {
    mettID: -1,
    personID: -1,
    datum: '1900-01-01',
    anzahl: -1,
    bezahlt: false,
    ohneMett: false,
  };

  private alleBestellungenInfos!: alleBestellungenInfos;

  public constructor(
    private bestellungService: BestellungService,
    public formatter: FormatterService
  ) {}

  public ngOnInit(): void {
    this.bestellungService
      .getBestellung()
      .subscribe((response: bestellungenDefinition) => {
        console.log(response);
        this.alleBestellungenInfos = response.alleBestellungenInfos;
        this.bestellungenProPerson = response.bestellungProPerson;

        // Tabellen-Header setzen
        let dates = response.alleBestellungenInfos.dates;
        for (let i = 0; i < dates.length; i++) {
          let dateColumn: columnDefinition = {
            field: 'date_' + i,
            header: this.formatDate(dates[i].datum),
          };
          this.tableDateCols.push(dateColumn);
        }
      });
  }

  /** Gets called after click on table cell and open dialog */
  public tableClick(personID: number, detail: any): void {
    console.log(personID, detail);
    // Dialog füllen und öffnen
    this.dialogDetail = {
      mettID: detail.mettID,
      personID: personID,
      datum: detail.datum,
      anzahl: detail.anzahl,
      bezahlt: detail.bezahlt,
      ohneMett: detail.ohneMett,
    };
    this.displayBestellungBearbeiten = true;
  }

  /** Formats a Date to German format */
  public formatDate(date: string): string {
    return this.formatter.formatIntrnationDateToGerman(date);
  }

  /** ? */
  public dialogFooterClicked(speichern: boolean) {
    this.displayBestellungBearbeiten = false;

    if (speichern) {
      console.log('speichen');

      // Mettwoch ID herausfinden
      let mettwochID = -1;

      for (const date of this.alleBestellungenInfos.dates) {
        if (date.datum === this.dialogDetail.datum) {
          mettwochID = date.mettwochID;
        }
      }

      // Datensatz aktualisieren
      for (const bestellungPerson of this.bestellungenProPerson) {
        // Person gefunden
        if (bestellungPerson.personID === this.dialogDetail.personID) {
          for (const bestellung of bestellungPerson.bestellungen) {
            console.log(bestellung.mettID, mettwochID);

            // Bestellung gefunden
            if (bestellung.mettID === this.dialogDetail.mettID) {
              console.log('besttellung aktualisieren');

              bestellung.anzahl = this.dialogDetail.anzahl;
              bestellung.bezahlt = this.dialogDetail.bezahlt;
              bestellung.ohneMett = this.dialogDetail.ohneMett;
            }
          }
        }
      }

      if (this.dialogDetail.mettID === -1) {
        console.log('insert');

        let object: mettBestellungDefinition = {
          mettID: undefined,
          anzahl: this.dialogDetail.anzahl,
          bezahlt: this.dialogDetail.bezahlt,
          ohneMett: this.dialogDetail.ohneMett,
          mettwochID: mettwochID,
          personID: this.dialogDetail.personID,
        };

        // insert
        this.bestellungService
          .insertBestellung(object)
          .subscribe((response) => console.log(response));
      } else {
        console.log('update');

        let object: mettBestellungDefinition = {
          mettID: this.dialogDetail.mettID,
          anzahl: this.dialogDetail.anzahl,
          bezahlt: this.dialogDetail.bezahlt,
          ohneMett: this.dialogDetail.ohneMett,
          mettwochID: mettwochID,
          personID: this.dialogDetail.personID,
        };

        // update
        this.bestellungService
          .updateBestellung(this.dialogDetail.mettID, object)
          .subscribe((response) => console.log(response));
      }
    }
  }
}
