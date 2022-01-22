// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client } from '@notionhq/client/build/src';
const notion = new Client({ auth: process.env.NOTION_KEY });

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
  });

  res.status(200).json(response);
}
