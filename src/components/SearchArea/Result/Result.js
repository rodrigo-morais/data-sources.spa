import Vue from 'vue'
import { mapState } from 'vuex'
import Component from 'vue-class-component'
import Item from './Item/index.vue'

export default Component({
  name: 'SearchResult',
  components: { Item },
  computed: {
    ...mapState({
      dataSources: ({ dataSources }) => dataSources,
      hasData: ({ dataSources }) =>
        dataSources && !dataSources.loading && !dataSources.error && dataSources.data,
    }),
  },
})(class SearchResult extends Vue {})
