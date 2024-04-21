import { createApp } from 'vue'
import App from './App.vue'

import NavigationBar from "@/components/NavigationBar.vue";
import './scss/reset.scss';
import './scss/rules.scss'


const app = createApp(App);

function registerComponent(app: any, component: any): void {
  app.component(component.name, component);
}

registerComponent(app, NavigationBar);




app
  .mount('#app')

