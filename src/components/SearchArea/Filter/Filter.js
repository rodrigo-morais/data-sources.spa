import Vue from 'vue'
import Component from 'vue-class-component'
import SearchTextBox from './TextBox/index.vue'
import Dropdown from '../../shared/Dropdown/index.vue'

export default Component({
  name: 'SearchFilter',
  components: { SearchTextBox, Dropdown },
})(class SearchFilter extends Vue {})
