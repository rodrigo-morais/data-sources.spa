import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Result from '@/components/SearchArea/Result/index.vue'


const localVue = createLocalVue()
localVue.use(Vuex)

const actions = { fetchDataSources: jest.fn() }
const state = {
  search: {
    loading: false,
    data: { dataSources: [{ name: 'DataSource 1', archived: true }, { name: 'DataSource 2', archived: false }] },
    error: false,
  },
}
const store = new Vuex.Store({
  state,
  actions,
})

describe('Result.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Result, { store, localVue })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
