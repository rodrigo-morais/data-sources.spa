import { DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED } from './constants'

const getDate = (days) => {
  const today = new Date()
  today.setDate(today.getDate() - days)
  return today
}

export default {
  fetchDataSources({ commit }, {
    name, legalEntity, sortBy, archived,
  }) {
    return new Promise((resolve) => {
      commit(DATA_SOURCES_PENDING)
      const dataSources = [
        {
          name: 'Data Source 1', legal: true, createdAt: getDate(-5), archived: false,
        },
        {
          name: 'Production DB', legal: true, createdAt: getDate(-2), archived: false,
        },
        {
          name: 'Data Source 3', legal: false, createdAt: getDate(-1), archived: false,
        },
        {
          name: 'Data Source 4', legal: true, createdAt: getDate(-12), archived: true,
        },
        {
          name: 'A Data Source', legal: false, createdAt: getDate(-4), archived: false,
        },
        {
          name: 'Data Source 6', legal: false, createdAt: getDate(-6), archived: true,
        },
        {
          name: 'Data Source 7', legal: true, createdAt: getDate(-10), archived: false,
        },
        {
          name: 'Newsletter', legal: true, createdAt: getDate(-3), archived: false,
        },
        {
          name: 'Data Source 9', legal: false, createdAt: getDate(-9), archived: false,
        },
      ]
      setTimeout(() => {
        const filteredData = dataSources
          .filter(dataSource =>
            (name === '' || dataSource.name.toLowerCase().startsWith(name)) &&
            (legalEntity === '' || dataSource.legalEntity === Boolean(legalEntity)) &&
            (dataSource.archived === archived))
          .sort((prev, cur) => (sortBy === 1 ?
            cur.createAt - prev.createdAt :
            prev.createAt - cur.createdAt))

        commit(DATA_SOURCES_FULFILLED, filteredData)
        resolve()
      }, 3000)
    })
  },
}
