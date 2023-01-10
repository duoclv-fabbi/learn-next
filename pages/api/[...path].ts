// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

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
        // convert cookie to header authorization
        const CookieHeader = new Cookies(req,res)
        const accessToken = CookieHeader.get('accessToken')
        console.log('accessToken', accessToken)
        if (accessToken) req.headers.authorization = `Bearer ${accessToken}`
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
