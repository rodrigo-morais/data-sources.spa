import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import Checkbox from '@/components/shared/Checkbox/index.vue'

const props = {
  label: 'Select',
}

describe('Checkbox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Checkbox)
  })

  it('renders according to design', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('renders according to design when is checked', () => {
    const wrapperChecked = shallowMount(Checkbox, {
      propsData: { ...props, isChecked: true },
    })
    const renderer = createRenderer()
    renderer.renderToString(wrapperChecked.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('calls `onClick` props method when execute `handleToggle`', () => {
    const checkbox = wrapper.find('.checkbox')
    checkbox.trigger('click')

    expect(wrapper.emitted().onClick).toBeTruthy()
    expect(wrapper.emitted().onClick[0]).toEqual([true])
  })
})
