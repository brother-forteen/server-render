/**
 * @createDate: 2020/2/27
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

// 创建Vue实例
const Vue = require('vue');
const app = new Vue({
    template: '<div>Hello world</div>'
});

// 创建一个renderer
const renderer = require('vue-server-renderer').createRenderer();

// 将Vue 实例渲染为HTML
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
    console.log(html);
    // => <div data-server-rendered="true">Hello World</div>
}).catch(err => {
    console.log(err);
});

