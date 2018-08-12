import Vue from 'vue'
import { mapState } from 'vuex'
import Component from 'vue-class-component'
import Item from './Item/index.vue'

export default Component({
  name: 'SearchResult',
  components: { Item },
  computed: {
    ...mapState({
      dataSources: ({ search: { data } }) => (data ? data.dataSources : []),
      hasData: ({ search: { data, loading, error } }) =>
        data && !loading && !error && data.dataSources,
    }),
  },
})(class SearchResult extends Vue {})
