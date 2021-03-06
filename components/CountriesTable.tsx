import { CountryDataTypes } from "types/CountryData";
import styles from '@styles/CountriesTable.module.css';
import NotFound from "./NotFound";
import Link from 'next/link';

export default function CountriesTable({ countries }: { countries: CountryDataTypes[] }) {

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
        </tr>
      </thead>
    );
  }

  const TableBody = () => {
    return (
      <tbody>
        {countries.map((country: CountryDataTypes) =>
          <Link key={country.name} href={`/countries/${country.name}`} passHref>
            <tr>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
            </tr>
          </Link>
        )}
      </tbody>
    );
  }

  return (
    <div className={styles['table-container']}>
      {countries.length ?
        <table>
          <TableHeader />
          <TableBody />
        </table> : <NotFound />}
    </div>
  )
}
