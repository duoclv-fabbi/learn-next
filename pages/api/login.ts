// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'


const proxy =  httpProxy.createProxyServer() 


type Data = {
  msg: string
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    return new Promise((resolve) => {
        if (req.method !== 'POST') return res.status(400).json({msg: 'method not sp!'})

        console.log('loginnnnnnn')

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            // handle res
            let body = '';
            proxyRes.on('data', function(chunk){
                body += chunk
            })

            proxyRes.on('end', function() {
                const { accesToken, expireAt } = JSON.parse(body)
                console.log('body', accesToken, expireAt)
                res.end('my res to cli')
            })
        }

        proxy.once('proxyReq', () => {
            handleLoginResponse
        })

        proxy.web(req, res, {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            selfHandleResponse: true
        })

    })
}
