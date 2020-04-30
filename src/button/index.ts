export class divDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.aEl) {
      this.aEl = document.createElement('button');
      this.aEl.style.height = '10px';
      this.aEl.style.width = '30px';
      this.el.append(this.aEl);
      this.el.style.height = '10px';
    }

    return [null];
  }

  public update({}) {
    return [`button`];
  }

  private aEl: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default divDom;