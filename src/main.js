import './assets/styles/main.scss';
import { createApp, h } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp({
  render: () => h(App)
});

app.config.productionTip = false;
app.use(store);
app.use(router);
app.mount('#app');
