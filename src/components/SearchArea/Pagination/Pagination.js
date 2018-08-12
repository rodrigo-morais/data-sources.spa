import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Component from 'vue-class-component'

export default Component({
  name: 'SearchPagination',
  components: { },
  methods: {
    ...mapActions({
      search: 'fetchDataSources',
    }),
  },
  computed: {
    ...mapState({
      data: ({ search: { data } }) => data,
      loading: ({ search: { loading } }) => loading,
      previous: ({ search: { data } }) =>
        data && data.page > 1,
      next: ({ search: { data } }) =>
        data && (data.page * data.perPage) < data.totalCount,
    }),
  },
})(class SearchPagination extends Vue {
  nextPage() {
    this.search({
      name: this.data.name,
      legalEntity: this.data.legalEntity,
      sortBy: this.data.sortBy,
      archived: this.data.archived,
      page: this.data.page + 1,
    })
  }

  previousPage() {
    this.search({
      name: this.data.name,
      legalEntity: this.data.legalEntity,
      sortBy: this.data.sortBy,
      archived: this.data.archived,
      page: this.data.page - 1,
    })
  }
})
