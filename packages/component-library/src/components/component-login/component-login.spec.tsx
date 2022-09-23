import { newSpecPage } from '@stencil/core/testing';
import { ComponentLogin } from './component-login';

describe('component-login', () => {

  beforeEach(() => {
    jest.useFakeTimers('legacy');
  });

  it('logs in user with an example test of testing with html', async () => {

    const page = await newSpecPage({
      components: [ComponentLogin],
      html: `<component-login></component-login>`,
    });

    const loginButton = page.root.querySelectorAll('[data-testid=loginButton]')[0] as HTMLButtonElement;
    loginButton.click();
    await page.waitForChanges();

    expect(page.root.innerHTML).toContain('component-spinner');

    jest.advanceTimersByTime(3000);
    await page.waitForChanges();

    expect(page.root.innerHTML).toContain('Congratulations!')
  });
  it('logs in user with an example test of testing with component', async () => {

    const loginComponent = new ComponentLogin();

    expect(loginComponent.isLoggedIn).toBeFalsy();
    expect(loginComponent.isLoading).toBeFalsy();

    loginComponent.logInUser();

    expect(loginComponent.isLoggedIn).toBeFalsy();
    expect(loginComponent.isLoading).toBeTruthy();

    jest.advanceTimersByTime(3000);

    expect(loginComponent.isLoggedIn).toBeTruthy();
    expect(loginComponent.isLoading).toBeFalsy();
  });
});
