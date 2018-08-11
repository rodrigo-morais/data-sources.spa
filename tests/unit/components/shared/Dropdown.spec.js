import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import Dropdown from '@/components/shared/Dropdown/index.vue'

const props = {
  label: 'Select',
  value: '1',
  items: ['1', '2', '3'],
}

describe('Dropdown.vue', () => {
  it('renders according to design', () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: props,
    })
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
    const wrapper = shallowMount(Dropdown, {
      propsData: props,
    })

    const dropdown = wrapper.find('.dropdown')
    dropdown.find('a').trigger('click')

    const secondItem = wrapper.findAll('.dropdown__menu li').at(1)
    secondItem.trigger('click')

    expect(dropdown.findAll('a').at(1).text()).toBe('2')
  })
})
