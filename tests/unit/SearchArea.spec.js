import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import SearchArea from '@/components/SearchArea/index.vue';

describe('SearchArea.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer();
    const wrapper = shallowMount(SearchArea);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
