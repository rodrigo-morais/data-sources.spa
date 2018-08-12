import Vue from 'vue'
import Component from 'vue-class-component'

export default Component({
  name: 'SearchResult',
  components: { },
  props: { name: String, archived: Boolean },
})(class SearchResult extends Vue {})
