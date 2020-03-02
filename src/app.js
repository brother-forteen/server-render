/**
 * @createDate: 2020/2/28
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/


const Vue = require('vue');
import App from "./app";
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export const createApp = (context) => {
    const router = createRouter();
    const store = createStore();

    // 同步路由状态(route state)到 store
    sync(store, router);

    const app = new Vue({
        // 根实例简单的渲染应用程序组件。
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store }
};
