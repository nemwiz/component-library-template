import {Component, h, Host, State} from '@stencil/core';

@Component({
  tag: 'component-login',
  styleUrl: 'component-login.scss',
  shadow: false,
})
export class ComponentLogin {

  @State() isLoading = false;
  @State() isLoggedIn = false;

  logInUser() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
    }, 3000);
  }

  render() {
    return (
      <Host>
        {this.isLoading ?
          <div class={'component-login'}>
            <component-spinner></component-spinner>
          </div> : null}
        {this.isLoading || this.isLoggedIn ? null :
          <div class={'component-login'}>
            <component-input label-text="Email" placeholder-text="john.doe@email.com" input-id="1"></component-input>
            <component-input label-text="Password" input-type="password" input-id="2"></component-input>
            <component-button data-test-id={'loginButton'}
                              text="Log in"
                              type="primary"
                              onClick={() => this.logInUser()}></component-button>
          </div>
        }
        {this.isLoggedIn ?
          <div class={'component-login'}>
            <h2>Congratulations! You are now logged in.</h2>
          </div>
          : null}
      </Host>
    );
  }

}
