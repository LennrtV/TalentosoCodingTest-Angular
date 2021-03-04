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

------

# TalentosoCodingtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
