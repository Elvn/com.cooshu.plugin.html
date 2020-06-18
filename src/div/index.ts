import { IPlugin, IPluginRenderArgs, IPluginUpdateArgs } from 'kusu-plugin-sdk';

export class divDom implements IPlugin {

  public render({ props, pluginWrapperEl, kusuTools }: IPluginRenderArgs) {
    this.wrapperEl = pluginWrapperEl;

    if (!this.divEl) {
      const divEl = document.createElement('div');
      divEl.className += kusuTools.defineContainer('container');
      Object.keys(props.style || {}).forEach(key => {
        divEl.style[key] = props.style[key];
      });

      this.divEl = divEl;
      this.wrapperEl.append(divEl);
      this.wrapperEl.style.height = (props.style && props.style.height) || '20px';
    }
  }

  public update({ props }: IPluginUpdateArgs) {
    Object.keys(props.style || {}).forEach(key => {
      (this.divEl as HTMLElement).style[key] = props.style[key];
    });

    if (props.style && props.style.height) {
      (this.wrapperEl as HTMLElement).style.height = props.style.height;
    }
  }

  private divEl: HTMLElement | null = null;

  private wrapperEl: HTMLElement | null = null;
}

export default divDom;