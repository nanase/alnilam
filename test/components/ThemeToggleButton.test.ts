// @vitest-environment happy-dom
import ThemeToggleButton from '@/components/ThemeToggleButton.vue';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('ThemeToggleButton', () => {
  test('click theme toggle button', async () => {
    const wrapper = mount(ThemeToggleButton, { global: { plugins: [vuetify] } });
    const theme = wrapper.vm.$vuetify.theme;
    const oldTheme = theme.global.current.dark;

    await wrapper.find('[data-test="button"]').trigger('click');
    expect(theme.global.current.dark).not.toBe(oldTheme);
  });
});
