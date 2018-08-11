import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SideBar from '@/components/SideBar/index.vue'

describe('SideBar.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(SideBar)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
