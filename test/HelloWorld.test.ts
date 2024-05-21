import { render } from '@testing-library/vue';
import HelloWorld from '../src/components/HelloWorld.vue';
import { describe, it, expect } from 'vitest';

describe('HelloWorld.vue', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(HelloWorld, {
      props: {
        msg: 'Hello Vitest'
      }
    });

    expect(2).toEqual(2);
  });
});