// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    listData: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') return res.status(400).json({listData: 'method not sp!'})

    const response = await (await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&limit=10')).json()
    console.log('response', response)
  res.status(200).json({ listData: response.data })
}
