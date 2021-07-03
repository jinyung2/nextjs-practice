import Layout from "@components/Layout"
import { GetServerSideProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { CountryDataTypes } from "types/CountryData";
import CountriesTable from "@components/CountriesTable";
import styles from '@styles/Countries.module.css';

export default function CountriesPage({countries} : {countries: CountryDataTypes[]}) {
  let to: NodeJS.Timeout;
  const [filtered, setFiltered] = useState(""); 

  const countryChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (to) clearTimeout(to);
    to = setTimeout(() => {
      setFiltered(e.target.value);
    }, 500);
  }

  return (
    <Layout title="Country Search">
      <label htmlFor="country">Country</label>
      <input type="search" id="country" onChange={countryChangeHandler} autoComplete="off" placeholder="Search Country Name"/>
      <CountriesTable countries={countries.filter((country: CountryDataTypes) => country.name.toLowerCase().startsWith(filtered.toLowerCase()))}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const countries = await (await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population")).json();
  // one country named Åland Islands, that starts with the Angstrom character... messes with my filter so changing into regular A
  countries[1].name = 'Aland Island';
  return {
    props: {countries}
  }
}
