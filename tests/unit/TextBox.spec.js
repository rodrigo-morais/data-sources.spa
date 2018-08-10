import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import SearchTextBox from '@/components/SearchArea/Filter/TextBox/index.vue'


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

describe('SearchTextBox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchTextBox, { store, localVue })
  })

  it('renders according to design', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('dispatches "fetchDataSources" when input event value has nmore than 3 characters', () => {
    const input = wrapper.find('#searchBox')
    input.element.value = 'data'
    input.trigger('input')

    expect(actions.fetchDataSources).toHaveBeenCalled()
  })
})
