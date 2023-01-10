// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

const proxy =  httpProxy.createProxyServer() 


type Data = {
  msg: string
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') return res.status(400).json({msg: 'method not sp!'})

    return new Promise((resolve) => {
        req.headers.cookie = ''

        console.log('loginnnnnnn')

        var option = {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            selfHandleResponse: true
          };
          proxy.on('proxyRes', function (proxyRes, req, res) {
              var body:any = '';
              proxyRes.on('data', function (chunk) {
                body = body + chunk
                //   body.push(chunk);
              });
              proxyRes.on('end', function () {
                try{
                  const { accessToken, expiredAt } = JSON.parse(body)
                    // convert to cookies
                    const cookies = new Cookies(req, res, {
                        secure: false
                    })

                    cookies.set('accessToken', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiredAt)
                    })
                }
                catch (error) {
                    console.error(error);
                  }
                    // cookies.serialize('accessToken', accessToken, {
                    //   httpOnly: true,
                    //   maxAge: 60 * 60 * 24 * 7 // 1 week
                    // })
                //   console.log("res from proxied server:", accessToken, expiredAt, cookies);
                  res.end("my response to cli");
              });
          });
          proxy.web(req, res, option);
    })
}
