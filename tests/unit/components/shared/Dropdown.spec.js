import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import Dropdown from '@/components/shared/Dropdown/index.vue'

const props = {
  label: 'Select',
  value: '1',
  items: ['1', '2', '3'],
}

describe('Dropdown.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Dropdown, {
      propsData: props,
    })
  })

  it('renders according to design', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('renders according to design when is open', () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: { ...props, isOpen: true },
    })
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('selects second item in the dropdown', () => {
    const dropdown = wrapper.find('.dropdown')
    dropdown.find('a').trigger('click')

    const secondItem = wrapper.findAll('.dropdown__menu li').at(1)
    secondItem.trigger('click')

    expect(dropdown.findAll('a').at(1).text()).toBe('2')
  })

  it('calls `onClick` props method when execute `handleToggle`', () => {
    const dropdownItem = wrapper.find('.dropdown__menu').find('ul').find('li')
    dropdownItem.trigger('click')

    expect(wrapper.emitted().onClick).toBeTruthy()
    expect(wrapper.emitted().onClick[0][0].replace(/\s/g, '')).toEqual('1')
  })
})
