import {newSpecPage} from '@stencil/core/testing';
import {Button} from './button';

describe('button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Button],
      html: '<component-button></component-button>',
    });
    expect(root).toBeDefined();
  });
});
