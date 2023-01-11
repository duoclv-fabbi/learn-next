// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

const proxy =  httpProxy.createProxyServer() 

export const config = {
    api: {
        bodyParser: false
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(400).json({msg: 'method not sp!'})

    return new Promise((resolve) => {
        req.headers.cookie = ''

        console.log('loginnnnnnn')

        var option = {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            selfHandleResponse: true
          };

          const cookies = new Cookies(req, res, {
            secure: false
          })

          cookies.set('accessToken')

          res.status(200).json('logout successfully!')
    })
}
