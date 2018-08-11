import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Button from '@/components/MyData/Button/index.vue'

describe('MyData.Button.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Button)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
