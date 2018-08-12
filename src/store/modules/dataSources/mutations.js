import {
  DATA_SOURCES_PENDING, DATA_SOURCES_FULFILLED,
  CHANGE_NAME, CHANGE_LEGAL_ENTITY, CHANGE_SORT_BY, CHANGE_ARCHIVED,
} from './constants'

export default {
  [DATA_SOURCES_PENDING]: state => Object.assign(state, { loading: true }),
  [DATA_SOURCES_FULFILLED]: (state, data) =>
    Object.assign(state, { loading: false, data }),
  [CHANGE_NAME]: (state, name) =>
    Object.assign(state, { data: { name } }),
  [CHANGE_LEGAL_ENTITY]: (state, legalEntity) =>
    Object.assign(state, { data: { legalEntity } }),
  [CHANGE_SORT_BY]: (state, sortBy) =>
    Object.assign(state, { data: { sortBy } }),
  [CHANGE_ARCHIVED]: (state, archived) =>
    Object.assign(state, { data: { archived } }),
}
