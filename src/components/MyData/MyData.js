import Vue from 'vue';
import Component from 'vue-class-component';

import Button from './Button/index.vue';

export default Component({
  name: 'MyData',
  components: { Button },
})(class MyDatar extends Vue {
  title = 'My Data'
});
