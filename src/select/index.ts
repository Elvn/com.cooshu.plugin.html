export class selectDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.selectEL) {
      this.selectEL = document.createElement('select');
      this.el.append(this.selectEL);
    }

    return [null];
  }

  public update({}) {
    return [`select`];
  }

  private selectEL: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default selectDom;