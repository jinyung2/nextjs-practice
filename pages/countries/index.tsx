import Layout from "@components/Layout"
import { GetServerSideProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { CountryData } from "types/CountryData";
import CountriesTable from "@components/CountriesTable";

export default function CountriesPage({countries} : {countries: CountryData[]}) {
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
      {/* Note: There is a country called the Aland Island, with a Angstrom character (not a regular A), it has a char Code of 197 */}
      {/* add the input and table here */}
      <label htmlFor="country">Country</label>
      <input type="search" id="country" onChange={countryChangeHandler} />
      <CountriesTable countries={countries.filter((country: CountryData) => country.name.startsWith(filtered))}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const countries = await (await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population")).json();
  return {
    props: {countries}
  }
}
