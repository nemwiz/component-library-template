import { newSpecPage } from '@stencil/core/testing';
import { ComponentSpinner } from './component-spinner';

describe('component-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentSpinner],
      html: `<component-spinner></component-spinner>`,
    });
    expect(page.root).toBeDefined();
  });
});
