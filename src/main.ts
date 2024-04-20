import { createApp } from 'vue'
import App from './App.vue'

import { Icon } from '@iconify/vue';
import { defineComponent } from 'vue';
import NavigationBar from "@/components/NavigationBar.vue";


defineComponent({
  name: 'MaterialSymbols10kSharp',
});

const app = createApp(App);

function registerComponent(app: any, component: any): void {
  app.component(component.name, component);
}

registerComponent(app, NavigationBar);




app
  .mount('#app')

