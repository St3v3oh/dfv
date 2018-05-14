import { Anwalt } from './anwalt';

export class Anwaelte {
    public anwaltliste: Array<Anwalt>;

    constructor() {
        this.anwaltliste = new Array<Anwalt>();
        this.anwaltliste.push({
            // tslint:disable-next-line:max-line-length
            Beschreibung: 'Kurze Selbstbeschreibung des Anwalts veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.',
            Email: 'info .at. allset.de',
            Fachgebiet: 'Verkehrsrecht',
            Rufnummern: null,
            Faxnummern: null,
            Webseite: 'allset.de',
            Hausnummer: '15',
            Land: 'Deutschland',
            Name: 'Gabor Pribil',
            Plz: 'D-53757',
            Sonstiges: 'Liebt Hunde',
            Straße: '',
            Titel: 'Dr.',
            Stadt: 'Sankt Augustin'
        });
    }
}
