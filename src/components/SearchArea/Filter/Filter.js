import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'
import SearchTextBox from './TextBox/index.vue'
import Dropdown from '../../shared/Dropdown/index.vue'
import Checkbox from '../../shared/Checkbox/index.vue'

export default Component({
  name: 'SearchFilter',
  components: { SearchTextBox, Dropdown, Checkbox },
  methods: {
    ...mapActions({
      search: 'fetchDataSources',
    }),
  },
})(class SearchFilter extends Vue {
  dataSourceName = ''
  legalEntity = ''
  sortBy = 1
  archived = true

  changeDataSourceName(name) {
    this.dataSourceName = name
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeLegalEntity(legalEntity) {
    this.legalEntity = legalEntity
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeSortBy(sortBy) {
    this.sortBy = sortBy
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeArchieved(archieved) {
    this.archived = archieved
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }
})
