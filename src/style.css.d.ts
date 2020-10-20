declare namespace StyleCssNamespace {
  export interface IStyleCss {
    contentArea: string;
    embedCode: string;
    embedPreview: string;
    footnoteBlock: string;
    footnotebBlock: string;
    metaBar: string;
    textInput: string;
  }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
