### Mỗi commit là 1 bài học tham khảo dựa trên các nguồn và kinh nghiệm có được
### Trong mỗi commit có các phần bình luận phía dưới có thể hướng dẫn 1 chút công việc đã làm ở commit đó

### Deploy project
in folder nuxt-client/ <br />
`npm run build` <br />
`npm start` <br />

on server should install pm2 to run server node forever <br />
`npm install -g pm2` <br /> 
`pm2 start npm --start`

#Apache2 <br />

`<VirtualHost *:80>` <br />
  `ServerName client.laravelserver.local` <br />
  `DocumentRoot "D:/xampp/htdocs/laravel-shopify-nuxtjs/laravel-shopify-nuxtjs-structure/nuxt-client/.nuxt/dist"` <br />
  `Options -Indexes`

  `ProxyRequests on`

  `ProxyPass / http://localhost:3000/` <br />
  `ProxyPassReverse / http://localhost:3000/` <br />
`</VirtualHost>` <br />


go url http://client.laravelserver.local to test app

### Setting https in nuxt

setting file `server.key` and `server.crt` in nuxt-client <br/>

in file nuxt.config.js

`import path from 'path'` <br/>
`import fs from 'fs'` <br/>

in module.export

`server: {` <br/>
        `https: {` <br/>
           ` key: fs.readFileSync(path.resolve(__dirname, 'server.key')),` <br/>
            `cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))` <br/>
        `}` <br/>
    `}` <br/>
    
Now Nuxt run https ssl

### Setting https 443 apache

`<VirtualHost *:443>` <br/>
    `ServerName client.laravelserver.local` <br/>
	`ServerAlias www.mydomain.com` <br/>
	`DocumentRoot "D:/xampp/htdocs/nuxt-laravel-shopify-jwt/nuxt-client/.nuxt/dist"` <br/>
	`Options -Indexes` <br/>
	
   ` SSLEngine on` <br/>
	`SSLProxyEngine On` <br/>
   ` SSLCertificateFile "conf/ssl.crt/server.crt"` <br/>
    `SSLCertificateKeyFile "conf/ssl.key/server.key"` <br/>
	`ProxyRequests on` <br/>
	`ProxyPreserveHost On` <br/>
	`SSLProxyVerify none ` <br/>
	`SSLProxyCheckPeerCN off` <br/>
	`SSLProxyCheckPeerName off` <br/>
	`SSLProxyCheckPeerExpire off` <br/>
	`ProxyPass / https://localhost:3000/` <br/>
	`ProxyPassReverse / https://localhost:3000/` <br/>
`</VirtualHost>`
