import actions from '@/store/modules/dataSources/actions'
import { DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED } from '@/store/modules/dataSources/constants'

const { fetchDataSources } = actions

describe('actions', () => {
  it('fetchDataSources', async () => {
    const commit = jest.fn()

    await fetchDataSources({ commit }, {
      name: 'name', legalEntity: 'legalEntity', sortBy: 'sortBy', archived: true,
    })

    expect(commit).toHaveBeenCalledTimes(2)
    expect(commit).toHaveBeenNthCalledWith(1, DATA_SOURCES_PENDING)
    expect(commit).toHaveBeenNthCalledWith(2, DATA_SOURCES_FULFILLED, [{
      name: 'DataSource 1',
    },
    {
      name: 'DataSource 2',
    },
    ])
  })
})
