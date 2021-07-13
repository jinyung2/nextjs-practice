// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CountryDataTypes } from 'types/CountryData';
import { countries } from '../../cache/countries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CountryDataTypes[]>
) {
  const results = req.query.q
    ? countries.filter((country: CountryDataTypes) =>
        country.name
          .toLowerCase()
          .startsWith((req.query.q as string).toLowerCase())
      )
    : countries;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(results);
}
