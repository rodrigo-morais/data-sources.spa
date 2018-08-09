import { mount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import MyData from '@/components/MyData/index.vue';
import Button from '@/components/MyData/Button/index.vue';

jest.mock('@/components/MyData/Button/index.vue', () => 'Button');

describe('MyData.vue', () => {
  it('renders according to design', () => {
    const renderer = createRenderer();
    const wrapper = mount(MyData);

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
