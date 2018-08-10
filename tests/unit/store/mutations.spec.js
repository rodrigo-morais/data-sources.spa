import mutations from '@/store/modules/dataSources/mutations'
import { DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED } from '@/store/modules/dataSources/constants'

describe('mutations', () => {
  it('DATA_SOURCES_PENDING', () => {
    const state = {
      loading: false,
      data: null,
      error: false,
    }

    mutations[DATA_SOURCES_PENDING](state)

    expect(state.loading).toBe(true)
    expect(state.data).toBeNull()
    expect(state.error).toBeFalsy()
  })

  it('DATA_SOURCES_FULFILLED', () => {
    const state = {
      loading: true,
      data: null,
      error: false,
    }
    const dataSources = [
      { name: 'DataSource 1' },
      { name: 'DataSource 2' },
    ]

    mutations[DATA_SOURCES_FULFILLED](state, dataSources)

    expect(state.loading).toBe(false)
    expect(state.data).toEqual(dataSources)
    expect(state.error).toBeFalsy()
  })
})
