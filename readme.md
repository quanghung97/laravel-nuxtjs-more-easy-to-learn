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

<VirtualHost *:80> <br />
  ServerName client.laravelserver.local <br />
  DocumentRoot "D:/xampp/htdocs/laravel-shopify-nuxtjs/laravel-shopify-nuxtjs-structure/nuxt-client/.nuxt/dist" <br />
  Options -Indexes

  ProxyRequests on

  ProxyPass / http://localhost:3000/ <br />
  ProxyPassReverse / http://localhost:3000/ <br />
<   /VirtualHost> <br />


go url http://client.laravelserver.local to test app
