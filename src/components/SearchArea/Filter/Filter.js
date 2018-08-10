import Vue from 'vue'
import Component from 'vue-class-component'
import SearchTextBox from './TextBox/index.vue'

export default Component({
  name: 'SearchFilter',
  components: { SearchTextBox },
})(class SearchFilter extends Vue {})
