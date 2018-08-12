import {
  DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED,
  CHANGE_NAME, CHANGE_LEGAL_ENTITY, CHANGE_SORT_BY, CHANGE_ARCHIVED,
} from './constants'

const getDate = (days) => {
  const today = new Date()
  today.setDate(today.getDate() + days)
  return today
}

export default {
  changeName({ commit }, { name }) {
    commit(CHANGE_NAME, name)
  },
  changeLegalEntity({ commit }, { legalEntity }) {
    commit(CHANGE_LEGAL_ENTITY, legalEntity)
  },
  changeSortBy({ commit }, { sortBy }) {
    commit(CHANGE_SORT_BY, sortBy)
  },
  changeArchived({ commit }, { archived }) {
    commit(CHANGE_ARCHIVED, archived)
  },
  fetchDataSources({ commit }, {
    name, legalEntity, sortBy, archived, page = 1, perPage = 6,
  }) {
    return new Promise((resolve) => {
      commit(DATA_SOURCES_PENDING)
      const dataSources = [
        {
          name: 'Data Source 1', legalEntity: true, createdAt: getDate(-5), archived: false,
        },
        {
          name: 'Production DB', legalEntity: true, createdAt: getDate(-2), archived: false,
        },
        {
          name: 'Data Source 3', legalEntity: false, createdAt: getDate(-1), archived: false,
        },
        {
          name: 'Data Source 4', legalEntity: true, createdAt: getDate(-12), archived: true,
        },
        {
          name: 'A Data Source', legalEntity: false, createdAt: getDate(-4), archived: false,
        },
        {
          name: 'Data Source 6', legalEntity: false, createdAt: getDate(-6), archived: true,
        },
        {
          name: 'Data Source 7', legalEntity: true, createdAt: getDate(-10), archived: false,
        },
        {
          name: 'Newsletter', legalEntity: true, createdAt: getDate(-3), archived: false,
        },
        {
          name: 'Data Source 9', legalEntity: false, createdAt: getDate(-9), archived: false,
        },
      ]
      setTimeout(() => {
        const filteredData = dataSources
          .filter(dataSource =>
            (name === '' || dataSource.name.toLowerCase().startsWith(name.toLowerCase())) &&
            (legalEntity === '' || dataSource.legalEntity === (legalEntity === 'true')) &&
            (dataSource.archived === archived))
          .sort((prev, cur) => {
            if (sortBy === 1) {
              if (new Date(prev.createdAt) > new Date(cur.createdAt)) return -1
              if (new Date(prev.createdAt) < new Date(cur.createdAt)) return 1
              return 0
            }
            if (new Date(prev.createdAt) < new Date(cur.createdAt)) return -1
            if (new Date(prev.createdAt) > new Date(cur.createdAt)) return 1
            return 0
          })

        commit(DATA_SOURCES_FULFILLED, {
          name,
          legalEntity,
          sortBy,
          archived,
          page,
          perPage,
          dataSources: filteredData
            .slice((page === 1 ? 0 : perPage * (page - 1)), page * perPage),
          totalCount: filteredData.length,
        })
        resolve()
      }, 3000)
    })
  },
}
