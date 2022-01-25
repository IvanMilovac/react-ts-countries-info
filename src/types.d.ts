interface Country {
  name: string;
  nativeName: string;
  region: string;
  subregion: string;
  population: number;
  capital: string;
  flags: { svg: string; png: string };
  borders: string[];
  alpha3Code: string;
  languages: { name: string }[];
  currencies: { name: string; code: string; symbol: string }[];
  topLevelDomain: string[];
}
