export class divDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.divEl) {
      this.divEl = document.createElement('div');
      this.el.append(this.divEl);
      this.el.style.height = '10px';
    }

    return [null];
  }

  public update({}) {
    return [`div`];
  }

  private divEl: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default divDom;