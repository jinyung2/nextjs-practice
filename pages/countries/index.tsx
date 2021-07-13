import Layout from "@components/Layout"
import { GetStaticProps } from "next";
import { ChangeEventHandler, useState, useEffect, SyntheticEvent } from "react";
import { CountryDataTypes } from "types/CountryData";
import CountriesTable from "@components/CountriesTable";
import styles from '@styles/Countries.module.css';

export default function CountriesPage({ countries }: { countries: CountryDataTypes[] }) {
  const [filtered, setFiltered] = useState<string>("");
  const [autoComp, setAutoComp] = useState<string[]>(['']);

  useEffect(() => {
    console.log('filtered useeffect fired!');
    const newAutoComp = countries
      .filter((country: CountryDataTypes) => country.name.toLowerCase().startsWith(filtered.toLowerCase()) && filtered !== '')
      .map((country: CountryDataTypes) => country.name);
    setAutoComp(newAutoComp);
  }, [filtered])

  const countryFilterHandler = () => {
    return countries.filter((country: CountryDataTypes) => country.name.toLowerCase().startsWith(filtered.toLowerCase()))
  }

  const countryChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFiltered(e.target.value);
  }

  const filterHandler = (e: string) => {
    setFiltered(e);
    // why does this setTimeout work??
    setTimeout(() => { setAutoComp([]) }, 0);
  }


  return (
    <Layout title="Country Search">
      <label htmlFor="country">Country</label>
      <input type="search" id="country" onChange={countryChangeHandler} value={filtered} autoComplete="off" placeholder="Search Country Name" />
      <div className={styles.autocomplete}>
        {autoComp.length !== 0 && <ul>
          {autoComp.map((country: string) =>
            <li key={country} onClick={() => filterHandler(country)}>
              {country}
            </li>)}
        </ul>
        }
      </div>
      <CountriesTable countries={countryFilterHandler()} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const countries = await (await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population")).json();
  // one country named Åland Islands, that starts with the Angstrom character... messes with my filter so changing into regular A
  countries[1].name = 'Aland Islands';
  return {
    props: { countries }
  }
}
