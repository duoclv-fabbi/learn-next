// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'


const proxy =  httpProxy.createProxyServer() 


// type Data = {
//   name: string
// }

export const config = {
    api: {
        bodyParser: false
    }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    return new Promise((resolve) => {
        req.headers.cookie = ''
        proxy.web(req, res, {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            selfHandleResponse: false
        })
        proxy.once('proxyReq', () => {
            resolve(true)
        })
    })


    // console.log('req', req, res)

    // proxy.web(req, res, {
    //     target: 'https://js-post-api.herokuapp.com',
    //     changeOrigin: true,
    //     selfHandleResponse: false
    // })

//   res.status(200).json({ name: 'path' })
}
