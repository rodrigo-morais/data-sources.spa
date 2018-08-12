import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Item from '@/components/SearchArea/Result/Item/index.vue'

describe('Item.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Item)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
