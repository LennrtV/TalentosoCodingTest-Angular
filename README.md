# TalentosoCodingtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Requirements

Run `npm install` in the project folder to install the required packages and the Angular environment.

## Development server for frontend

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server for backend
Run `ng server` for a dev backend server based on the json file at server/db.json. The server will be available at `http://localhost:8000/`.

## Generate mock data
Run `ng data` to populate server/db.json with mock project data.

------

# Talentoso coding test - Angular

## Opdracht:
Je krijgt de opdracht om enkele pagina’s te ontwikkelen voor een tijdsregistratie tool.
Hiervoor worden de volgende pagina’s verwacht:
- Overzicht van lijst van tijdsregistraties, gefilterd voor een geselecteerde periode
- Opslaan van een lijst van tijdsregistraties
- Het aanpassen en opslaan van een reeds opgeslagen tijdsregistratie

Een tijdsregistratie bestaat uit:
- datum
- uren
- minuten
- project

Een project bestaat uit:
- naam
- periode (van - tot)

## Requirements:
- Aangezien er geen echte API voor handen is, mag je deze mocken

<ins>Lijst tijdsregistraties:</ins>

- De actieve filter staat standaard op de huidige week

<ins>Opslaan lijst tijdsregistraties:</ins>

- Je moet een lijst kunnen maken van 1 of meerdere tijdsregistraties voor een bepaalde periode
- Je moet aan de lijst een nieuwe tijdsregistratie kunnen toevoegen
- Je moet een tijdsregistratie uit de lijst kunnen aanpassen
- Je moet een tijdsregistratie uit de lijst kunnen verwijderen
- Wanneer de lijst compleet is, moet die kunnen verstuurd worden naar de API om opgeslagen te
worden

<ins>Bijwerken opgeslagen tijdsregistratie</ins>

- Je moet een reeds opgeslagen tijdsregistratie kunnen bijwerken en terug opslaan

## Validatie:
* Toevoegen of bijwerken van tijdsregistratie:
  * Datum, tijd & project moeten ingevuld zijn
  * Uren en minuten mogen geen negatieve waarde hebben
  * Datum van de tijdsregistratie moet binnen de periode van het project liggen. Je kan dus enkel de actieve projecten selecteren

## Testen:
- Je zorgt ervoor dat jouw implementatie is voorzien van de nodige unit testen

## Technologie:
- Angular
