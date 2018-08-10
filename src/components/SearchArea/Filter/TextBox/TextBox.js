import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions } from 'vuex'

export default Component({
  name: 'SearchTextBox',
  methods: {
    ...mapActions({
      search: 'fetchDataSources',
    }),
  },
})(class SearchTextBoxr extends Vue {
  placeholder = '\uf002 Filter Data Sources...'

  filterDataSources({ target }) {
    (target.value.length > 3) && this.search()
  }
})
