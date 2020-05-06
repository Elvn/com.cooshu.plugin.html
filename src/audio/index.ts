export class audioDom {

  public render({ el }: { el: HTMLElement }) {
    this.el = el;

    if (!this.audioEL) {
      this.audioEL = document.createElement('audio');
      this.audioEL.style.height = '30px';
      this.audioEL.style.width = '50px';
      this.el.append(this.audioEL);
      this.el.style.height = '10px';
    }

    return [null];
  }

  public update({}) {
    return [`audio`];
  }

  private audioEL: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default audioDom;