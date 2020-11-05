# Website der Ohrenbaum GmbH

In diesem Repository wird die doch recht langweilige Website der
Ohrenbaum GmbH geschrieben. Sie wird auf http://ohrenbaum.de
veröffentlicht.

Das Repository ist derzeit auf
https://github.com/svenk/ohrenbaum-website öffentlich lesbar
gehostet.

## Inhaltliches

Rechtlich essentiell ist das Impressum mit den Real-Life-Angaben.
Der Rest ist derzeit reine Satire.

Da schon Beschwerden kamen, dass die Ohrenbaum unseriös sei, gibt
es einen Seriösitäts-Schalter zum Aktivieren der Seriösität mit
JavaScript. Diese Funktion ist *unobstructive*, sie geht davon aus
dass Benutzer mit deaktiviertem JavaScript, Screenreadern oder
Terminal-Browsern auch in der Lage sind, die feinen Zwischentöne
rauszulesen.

## Technisches und Hosting

Die Domainstruktur von `ohrenbaum.de` ist wie folgt:

* `www` löst auf Github-Pages auf
* `*` und `@` löst auf meinen Server *Kolja* auf

Das Hosting funktioniert wie folgt:

* Die Seite besteht derzeit aus statischen HTML-Seiten.
* Github Pages veröffentlicht bei jedem Commit mit etwas Verzögerung
  (bis zu 15 Minuten) auf https://www.ohrenbaum.de/
* http://ohrenbaum.de/ und https://ohrenbaum.de/ leiten von Kolja
  weiter zu https://www.ohrenbaum.de/
* Theoretisch kann jeder andere Inhalt `http(s)://*.ohrenbaum.de/`
  zB. dynamischen oder anderen Inhalt hosten.

Auf diese Weise kann Kolja eigenen Content hosten und trotzdem
von Github Pages profitieren.

## Trage bei!

Wir sind über alle Beiträge von Benutzern dankbar. Einfac

1. Einen Github-Account anlegen, falls noch nicht geschehen
2. das Repository unter https://github.com/svenk/ohrenbaum-website forken
3. einen Push-Request erstellen

Jeder Push-Request wird beantwortet :-)
