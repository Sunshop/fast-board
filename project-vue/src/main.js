import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/style/base.css';
import App from './App.vue';
import router from './routes/index';
import store from './store/index';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
