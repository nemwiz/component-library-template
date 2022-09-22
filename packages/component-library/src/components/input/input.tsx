import {Component, Prop, h, State} from '@stencil/core';

@Component({
  tag: 'component-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {
  /**
   * Text for the label that shows above input field
   */
  @Prop() labelText: string;

  /**
   * Text that is used as a placeholder for the input field
   */

  @Prop() placeholderText: string = '';

  /**
   * Type of this input field it can be email, number, text, password etc.
   */

  @Prop() inputType: string = 'email';

  @State() isFocused = false;

  @State() value = '';

  render() {
    return (
      <div class={`input-component ${this.isFocused ? 'focused' : ''}`}>
        <label htmlFor={'input-field'}>{this.labelText}</label>
        <input type={this.inputType} id={'input-field'} class={'input-field'}
               onInput={(event) => this.value = (event.target as HTMLInputElement).value}
               onFocusin={() => this.isFocused = true}
               onFocusout={() => this.isFocused = false}/>
        {this.value === '' ? <p class={'hovering-label-container hovering-label'}>{this.placeholderText}</p> : null}
      </div>
    )
  }
}
