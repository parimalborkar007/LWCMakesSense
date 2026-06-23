import { LightningElement } from 'lwc';

export default class ShadowDom extends LightningElement {
  isClicked = false;

  handleClick() {
    this.isClicked = true;
  }
}
