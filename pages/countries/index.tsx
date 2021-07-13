import Layout from "@components/Layout"
import { ChangeEventHandler, useState, useEffect } from "react";
import { CountryDataTypes } from "types/CountryData";
import CountriesTable from "@components/CountriesTable";
import styles from '@styles/Countries.module.css';

export default function CountriesPage({ countriesData } : {countriesData: CountryDataTypes[]}) {
  const [filtered, setFiltered] = useState<string>("");
  const [countries, setCountries] = useState<CountryDataTypes[]>([]);
  const [autoComp, setAutoComp] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setCountries(countriesData)
  }, []);
  
  useEffect(() => {
    (async () => {
      if (filtered === '') {
        const res = await fetch(`/api/countries`);
        const countriesData = await res.json();
        setCountries(countriesData);
        setAutoComp([]);
      } else {
        const res = await fetch(`/api/countries?q=${filtered}`);
        const countriesData = await res.json();
        const countriesNames = countriesData.map((country: CountryDataTypes) => country.name);
        setAutoComp(countriesNames);
        setCountries(countriesData);
      }
    })();
  }, [filtered])

  const countryChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!active) setActive(true);
    setFiltered(e.target.value);
    console.log(e.target.value);
  }

  const filterHandler = (e: string) => {
    setFiltered(e);
    setActive(false);
  }

  return (
    <Layout title="Country Search">
      <label htmlFor="country">Country</label>
      <input type="search" id="country" onChange={countryChangeHandler} value={filtered} autoComplete="off" placeholder="Search Country Name" />
      <div className={styles.autocomplete}>
        {active && <ul>
          {autoComp.map((country: string) =>
            <li key={country} onClick={() => filterHandler(country)}>
              {country}
            </li>)}
        </ul>
        }
      </div>
      <CountriesTable countries={countries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const countries = require('../../cache/countries').countries;
  return {
    props: {
      countriesData: countries
    }
  }
};