import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Header from '@/components/Header/index.vue';

describe('Header.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer();
    const wrapper = shallowMount(Header);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
