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
      updateName: 'changeName',
      updateLegalEntity: 'changeLegalEntity',
      updateSortBy: 'changeSortBy',
      updateArchived: 'changeArchived',
    }),
  },
})(class SearchFilter extends Vue {
  dataSourceName = ''
  legalEntity = ''
  sortBy = 1
  archived = false

  changeDataSourceName(name) {
    this.dataSourceName = name
    this.updateName({ name })
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeLegalEntity(legalEntity) {
    if (legalEntity.replace(/\s/g, '') === 'ShowAll') {
      this.legalEntity = ''
    } else if (legalEntity.replace(/\s/g, '') === 'Yes') {
      this.legalEntity = 'true'
    } else {
      this.legalEntity = 'false'
    }

    this.updateLegalEntity({ legalEntity })
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeSortBy(sortBy) {
    this.sortBy = sortBy.replace(/\s/g, '') === 'Mostrecent' ? 1 : 2
    this.updateSortBy({ sortBy })
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }

  changeArchieved(archived) {
    this.archived = archived

    this.updateArchived({ archived })
    this.search({
      name: this.dataSourceName,
      legalEntity: this.legalEntity,
      sortBy: this.sortBy,
      archived: this.archived,
    })
  }
})
