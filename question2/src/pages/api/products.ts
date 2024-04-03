import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { company, category, top, minPrice, maxPrice } = req.query;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    const response = await axios.get(
      `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
      {
        headers: config.headers,
        params: {
          top,
          minPrice,
          maxPrice,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}
