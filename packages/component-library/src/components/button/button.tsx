import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'component-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  /**
   * Button text
   */
  @Prop() text: string;

  /**
   * Used to specify a type of the button. Can be "primary" or "secondary"
   */

  @Prop() type: string;

  render() {
    return <button
      class={`button-component ${this.type === 'primary' ? 'button-component-primary' : 'button-component-secondary'}`}>
      {this.text}
    </button>;
  }
}
