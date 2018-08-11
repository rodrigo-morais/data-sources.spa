import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import SearchTextBox from '@/components/SearchArea/Filter/TextBox/index.vue'


describe('SearchTextBox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SearchTextBox)
  })

  it('renders according to design', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('calls `onClick` props method when execute `changeText` with more than 3 characters', () => {
    const input = wrapper.find('#searchBox')
    input.element.value = 'data'
    input.trigger('input')

    expect(wrapper.emitted().onClick).toBeTruthy()
    expect(wrapper.emitted().onClick[0]).toEqual(['data'])
  })

  it('does not call `onClick` props method when execute `changeText` with less than 4 characters', () => {
    const input = wrapper.find('#searchBox')
    input.element.value = 'dat'
    input.trigger('input')

    expect(wrapper.emitted().onClick).toBeFalsy()
  })
})
