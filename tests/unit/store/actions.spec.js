import actions from '@/store/modules/dataSources/actions'

const { fetchDataSources } = actions

describe('actions', () => {
  it('fetchDataSources', async () => {
    const commit = jest.fn()

    await fetchDataSources({ commit }, {
      name: 'name', legalEntity: 'legalEntity', sortBy: 'sortBy', archived: true,
    })

    expect(commit).toHaveBeenCalledTimes(2)
  })
})
