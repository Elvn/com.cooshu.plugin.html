export class buttonDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.buttonEL) {
      this.buttonEL = document.createElement('button');
      this.buttonEL.innerText = '按钮';
      this.buttonEL.style.height = '30px';
      this.buttonEL.style.width = '55px';
      this.el.append(this.buttonEL);
    }

    return [null];
  }

  public update({}) {
    return [`button`];
  }

  private buttonEL: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default buttonDom;