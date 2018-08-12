import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'
import SearchFilter from './Filter/index.vue'
import SearchResult from './Result/index.vue'

export default Component({
  name: 'SearchArea',
  components: { SearchFilter, SearchResult },
  methods: {
    ...mapActions({
      search: 'fetchDataSources',
    }),
  },
})(class SearchArear extends Vue {
  mounted() {
    this.search({
      name: '',
      legalEntity: '',
      sortBy: 1,
      archived: false,
    })
  }
})
