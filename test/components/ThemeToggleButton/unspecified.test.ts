/**
 * @vitest-environment happy-dom
 * @vitest-environment-options {"settings": {"device": {"prefersColorScheme": ""}}}
 */
import ThemeToggleButton from '@/components/ThemeToggleButton.vue';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { getPrefersColorScheme, VuetifyColorSchemeName } from '@/lib/theme';

const vuetify = createVuetify({ components, directives });

describe('getPrefersColorScheme', () => {
  test('on unspecified', () => {
    expect(getPrefersColorScheme()).toEqual('unspecified');
  });
});

describe('ThemeToggleButton', () => {
  test('click theme toggle button', async () => {
    const colorResponsiveElement = document.createElement('object');
    colorResponsiveElement.classList.add('color-responsive');
    colorResponsiveElement.setAttribute('type', 'image/svg+xml');
    colorResponsiveElement.setAttribute(
      'data',
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8L3N2Zz4K',
    );
    document.body.appendChild(colorResponsiveElement);

    expect(colorResponsiveElement.classList).toContainEqual('color-responsive');

    const wrapper = mount(ThemeToggleButton, { global: { plugins: [vuetify] } });
    const theme = wrapper.vm.$vuetify.theme;

    expect(colorResponsiveElement.classList).toEqual({ '0': 'color-responsive', '1': 'color-responsive-light' });
    expect(localStorage.getItem(VuetifyColorSchemeName)).toBeNull();
    expect(theme.global.current.dark).toBeFalsy();

    await wrapper.find('[data-test="button"]').trigger('click');
    expect(colorResponsiveElement.classList).toEqual({ '0': 'color-responsive', '1': 'color-responsive-dark' });
    expect(theme.global.current.dark).toBeTruthy();
    expect(localStorage.getItem(VuetifyColorSchemeName)).toEqual('dark');

    await wrapper.find('[data-test="button"]').trigger('click');
    expect(colorResponsiveElement.classList).toEqual({ '0': 'color-responsive', '1': 'color-responsive-light' });
    expect(theme.global.current.dark).toBeFalsy();
    expect(localStorage.getItem(VuetifyColorSchemeName)).toEqual('light');
  });

  test('on saved scheme is "light"', async () => {
    localStorage.setItem(VuetifyColorSchemeName, 'light');
    const wrapper = mount(ThemeToggleButton, { global: { plugins: [vuetify] } });
    const theme = wrapper.vm.$vuetify.theme;
    expect(theme.global.current.dark).toBeFalsy();
  });

  test('on  saved scheme is "dark"', async () => {
    localStorage.setItem(VuetifyColorSchemeName, 'dark');
    const wrapper = mount(ThemeToggleButton, { global: { plugins: [vuetify] } });
    const theme = wrapper.vm.$vuetify.theme;
    expect(theme.global.current.dark).toBeTruthy();
  });
});
