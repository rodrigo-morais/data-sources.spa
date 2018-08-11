import Vue from 'vue'
import Component from 'vue-class-component'
import SearchTextBox from './TextBox/index.vue'
import Dropdown from '../../shared/Dropdown/index.vue'
import Checkbox from '../../shared/Checkbox/index.vue'

export default Component({
  name: 'SearchFilter',
  components: { SearchTextBox, Dropdown, Checkbox },
})(class SearchFilter extends Vue {})
