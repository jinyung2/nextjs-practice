import { CountryData } from "types/CountryData";



export default function CountriesTable({countries}: {countries: CountryData[]}) {

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
          {countries.map((country: CountryData) =>
          <tr>
            <th>{country.name}</th>
            <th>{country.capital}</th>
            <th>{country.region}</th>
            <th>{country.population}</th>
          </tr>
          )}
    </tbody>
    );
  }
  
  return (
    <div>
      {countries.length ? <TableHeader /> : <h1>NO COUNTRY PLACEHOLDER</h1>}
      <TableBody />
    </div>
  )
}
