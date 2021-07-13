import Layout from "@components/Layout";
import { GetStaticPaths } from "next"
import Link from 'next/link';
import { CountryDataTypes } from "types/CountryData";


export default function CountryPage({ country }: any) {
  return (
    <Layout title={`${country} Info`}>
      <h1>{country}</h1>
      <div>
        <Link href="/countries">Go Back</Link>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await (await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population")).json();
  // one country named Åland Islands, that starts with the Angstrom character... messes with my filter so changing into regular A
  countries[1].name = 'Aland Islands';
  const paths = countries.map((c: CountryDataTypes) => ({
    params: { country: c.name }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: any) => {
  return {
    props: {
      country: params.country
    }
  }
}