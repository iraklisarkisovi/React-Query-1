export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
}
