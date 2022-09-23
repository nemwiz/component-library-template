import {Component, Prop, h, State} from '@stencil/core';

@Component({
  tag: 'component-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {

  /**
   * Unique id for this input field
   */
  @Prop() inputId: string;

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
        <label htmlFor={this.inputId}>{this.labelText}</label>
        <input type={this.inputType} id={this.inputId} class={'input-field'} data-testid={this.inputId}
               onInput={(event) => this.value = (event.target as HTMLInputElement).value}
               onFocusin={() => this.isFocused = true}
               onFocusout={() => this.isFocused = false}/>
        {this.value === '' ? <p class={'hovering-label-container hovering-label'}>{this.placeholderText}</p> : null}
      </div>
    )
  }
}
