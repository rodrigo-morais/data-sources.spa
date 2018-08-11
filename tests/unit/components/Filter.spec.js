import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SearchFilter from '@/components/SearchArea/Filter/index.vue'

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

describe('SearchFilter.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchFilter, { store, localVue })
    actions.fetchDataSources.mockReset()
  })

  it('renders according to design', () => {
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('dispatches "fetchDataSources" when TextBox has more than 3 characters', () => {
    const input = wrapper.find('#searchBox')
    input.element.value = 'data'
    input.trigger('input')

    expect(actions.fetchDataSources).toHaveBeenCalled()
  })

  it('dispatches "fetchDataSources" when Checkbox is selected', () => {
    const checkbox = wrapper.find('.checkbox')
    checkbox.trigger('click')

    expect(actions.fetchDataSources).toHaveBeenCalled()
  })

  it('dispatches "fetchDataSources" when Dropdown is selected', () => {
    const dropdownItem = wrapper.find('.dropdown__menu').find('ul').find('li')
    dropdownItem.trigger('click')

    expect(actions.fetchDataSources).toHaveBeenCalled()
  })
})
