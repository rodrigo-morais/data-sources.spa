import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SearchTextBox from '@/components/SearchArea/Filter/TextBox/index.vue'

describe('SearchTextBox.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(SearchTextBox)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
