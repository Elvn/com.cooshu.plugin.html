export class imgDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.imgEL) {
      this.imgEL = document.createElement('img');
      this.el.append(this.imgEL);
    }

    return [null];
  }

  public update({}) {
    return [`img`];
  }

  private imgEL: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default imgDom;