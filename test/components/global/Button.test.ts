import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { Button } from '../../../src/components/global';
import { useHeroStore } from '../../../src/store/heroStore';

describe('Button', () => {
  let heroStore: ReturnType<typeof useHeroStore>;

  beforeEach(() => {
    const pinia = createTestingPinia({
      initialState: {
        heroStore: {
          isLoadingState: false,
        },
      },
    });

    heroStore = useHeroStore(pinia);
  });

  it('renders slot content', () => {
    const wrapper = mount(Button, {
      global: {
        plugins: [createTestingPinia()],
      },
      slots: {
        default: 'Search',
      },
    });

    expect(wrapper.html()).toContain('Search');
  });

  it('button is enabled when isLoadingState is false', () => {
    heroStore.setIsloading(false);
    const wrapper = mount(Button, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
  });

});
