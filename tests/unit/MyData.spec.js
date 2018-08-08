import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import MyData from '@/components/MyData/index.vue';

describe('MyData.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer();
    const wrapper = shallowMount(MyData);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
