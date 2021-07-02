import Layout from "@components/Layout"
import { GetServerSideProps } from "next";
import { CountryData } from "types/CountryData";

export default function CountriesPage({countries} : {countries: string[]}) {
  console.log(countries);
  return (
    <Layout title="Country Search">
      {/* add the input and table here */}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const res = await (await fetch("https://restcountries.eu/rest/v2/all?fields=name")).json();
  const countries = res.map((e: CountryData) => e.name);
  return {
    props: {countries}
  }
}
