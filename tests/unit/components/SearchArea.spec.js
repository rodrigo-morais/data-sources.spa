import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SearchArea from '@/components/SearchArea/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = { fetchDataSources: jest.fn() }
const state = {
  loading: false,
  data: [{ name: 'DataSource 1' }, { name: 'DataSource 2' }],
  error: false,
}
const store = new Vuex.Store({
  state,
  actions,
})

describe('SearchArea.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(SearchArea, { store, localVue })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
