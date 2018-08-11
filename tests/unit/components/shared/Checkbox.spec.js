import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import Checkbox from '@/components/shared/Checkbox/index.vue'

const props = {
  label: 'Select',
}

describe('Checkbox.vue', () => {
  it('renders according to design', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: props,
    })
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('renders according to design when is checked', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: { ...props, isChecked: true },
    })
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
