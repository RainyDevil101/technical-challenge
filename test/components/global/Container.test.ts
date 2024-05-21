import { Container } from '../../../src/components/global';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('YourComponent', () => {
  it('renders slot content', () => {
    const wrapper = mount(Container, {
      slots: {
        default: '<div class="slot-content">Hello, World!</div>',
      },
    });

    expect(wrapper.html()).toContain(
      '<div class="slot-content">Hello, World!</div>'
    );
  });

  it('has correct classes and structure', () => {
    const wrapper = mount(Container);

    expect(wrapper.classes()).toContain('mx-auto');
    expect(wrapper.classes()).toContain('max-w-screen-lg');
    expect(wrapper.classes()).toContain('px-4');
    expect(wrapper.classes()).toContain('h-full');
    expect(wrapper.element.tagName).toBe('DIV');
  });
});
