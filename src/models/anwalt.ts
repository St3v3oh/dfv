import { Bewertung } from './bewertung';

export interface Anwalt {
    Name: string;
    Titel: string;
    Fachgebiet: string;
    Rufnummern?: Array<string>;
    Faxnummern?: Array<string>;
    Email: string;
    Webseite: string;
    Beschreibung: string;
    Straße: string;
    Hausnummer: string;
    Plz: string;
    Stadt: string;
    Land: string;
    Sonstiges: string;
    Bewertungen?: Array<Bewertung>;
}
