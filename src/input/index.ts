export class inputDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.inputEL) {
      this.inputEL = document.createElement('input');
      this.el.append(this.inputEL);
    }

    return [null];
  }

  public update({}) {
    return [`input`];
  }

  private inputEL: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default inputDom;