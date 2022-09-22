import {newSpecPage} from '@stencil/core/testing';
import {Input} from './input';

describe('input', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Input],
      html: '<component-input></component-input>',
    });
    expect(root).toBeDefined();
  });
});
