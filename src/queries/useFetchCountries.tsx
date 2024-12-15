import { ICountry } from "../Interfaces/Interface.Countries";
import { instance } from "../http/AxiosReq";


export async function fetchData() {
  const res = await instance.get<ICountry[]>("/all");
  return res.data.map((country) => ({
    name: {
      common: country.name.common,
      official: country.name.official,
      nativeName: country.name.nativeName,
    },
    tld: country.tld || [],
    cca2: country.cca2,
    ccn3: country.ccn3,
    cca3: country.cca3,
    independent: country.independent,
    status: country.status,
    unMember: country.unMember,
    currencies: country.currencies,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
  }));
}

export async function fetchNamedData() {
  const res = await instance.get<ICountry[]>(`/name/georgia`);
  return res.data.map((country) => ({
    name: {
      common: country.name.common,
      official: country.name.official,
      nativeName: country.name.nativeName,
    },
    tld: country.tld || [],
    cca2: country.cca2,
    ccn3: country.ccn3,
    cca3: country.cca3,
    independent: country.independent,
    status: country.status,
    unMember: country.unMember,
    currencies: country.currencies,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
  }));
}