/**
 * @createDate: 2020/2/27
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

const Vue = require('vue');
const server = require('express')();
const createRenderer = require('vue-server-renderer').createRenderer();
const fs = require('fs');
const createApp = require('./src/app');

// const createApp = require('/path/to/built-server-bundle.js');

server.get('*', (req, res) => {
    // const app = new Vue({
    //     data: {
    //         url: req.url
    //     },
    //     template: '<div>访问的是：{{ url }}</div>'
    // });
    //
    const renderer = createRenderer({
        template: fs.readFileSync('./index.template.html', 'utf-8')
    });

    const context = {url: req.url};
    const app = createApp(context);

    // createApp(context).then()

    // renderer.renderToString(app).then(html => {
    //     console.log(html);
    //     res.end(`
    //         <!DOCTYPE html>
    //         <html lang="en">
    //             <head><title>Hello</title></head>
    //             <body>${html}</body>
    //         </html>
    // `)
    // }).catch(err => {
    //     res.status(500).end('Interal Server Error');
    //     return;
    // });
});

server.listen(8000);
