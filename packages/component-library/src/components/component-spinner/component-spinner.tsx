import {Component, h} from '@stencil/core';

@Component({
  tag: 'component-spinner',
  styleUrl: 'component-spinner.scss',
  shadow: false,
})
export class ComponentSpinner {

  render() {
    return (
      <div class={'component-spinner'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

}
