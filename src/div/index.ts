import { IPlugin, IPluginRenderArgs, IPluginUpdateArgs } from 'kusu-plugin-sdk';

export class divDom implements IPlugin {

  public render({ props, pluginWrapperEl, kusuTools }: IPluginRenderArgs) {
    this.el = pluginWrapperEl;

    if (!this.divEl) {
      this.divEl = document.createElement('div');
      this.divEl.className += kusuTools.defineContainer('container');
      this.el.append(this.divEl);
      this.el.style.height = '10px';
    }
  }

  public update({}: IPluginUpdateArgs) {
  }

  private divEl: HTMLElement | null = null;

  private el: HTMLElement | null = null;
}

export default divDom;