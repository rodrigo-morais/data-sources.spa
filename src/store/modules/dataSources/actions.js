import { DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED } from './constants'

export default {
  fetchDataSources({ commit }, {
    name, legalEntity, sortBy, archived,
  }) {
    return new Promise((resolve) => {
      commit(DATA_SOURCES_PENDING)
      setTimeout(() => {
        commit(DATA_SOURCES_FULFILLED, [{ name: 'DataSource 1' }, { name: 'DataSource 2' }])
        resolve()
      }, 3000)
    })
  },
}
