import { DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED } from './constants'

export default {
  [DATA_SOURCES_PENDING]: state => Object.assign(state, { loading: true }),
  [DATA_SOURCES_FULFILLED]: (state, dataSources) =>
    Object.assign(state, { loading: false, data: dataSources }),
}
