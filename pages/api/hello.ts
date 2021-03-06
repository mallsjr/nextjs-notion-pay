// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client/build/src';
const notion = new Client({ auth: process.env.NOTION_KEY });
/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: 'John Doe' })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID || '',
  });

  res.status(200).json(response);
}
