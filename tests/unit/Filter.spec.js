import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SearchFilter from '@/components/SearchArea/Filter/index.vue'

describe('SearchFilter.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(SearchFilter)

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
