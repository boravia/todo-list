import { createApp } from 'vue'
import App from './App.vue'

// import NavigationBar from "@/components/NavigationBar.vue";
// import CheckList from './components/CheckList.vue';
// import FooterApp from './components/FooterApp.vue';
// import NewListElement from './components/NewItem.vue';

import './scss/reset.scss';
import './scss/rules.scss';


const app = createApp(App);

// app.component('footer-app', FooterApp);
// function registerComponent(app: any, component: any): void {
//   app.component(component.name, component);
// }

// registerComponent(app, NavigationBar);
// registerComponent(app, CheckList);
// registerComponent(app, FooterApp);
// registerComponent(app, NewListElement);



app
  .mount('#app')

