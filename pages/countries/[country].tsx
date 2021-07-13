import Layout from "@components/Layout";
import { GetStaticPaths } from "next"
import Link from 'next/link';
import { CountryDataTypes } from "types/CountryData";

export default function CountryPage({ country }: { country: string }) {

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
  const countries = require('../../cache/countries').countries;
  const paths = countries.map((country: CountryDataTypes) => ({ params: { country: country.name } }));
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