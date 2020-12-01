declare namespace TypedParagraphCssNamespace {
  export interface ITypedParagraphCss {
    'button-container': string
    'toggle-paragraph-type': string
    'typed-paragraph-wrapper': string
  }
}

declare const TypedParagraphCssModule: TypedParagraphCssNamespace.ITypedParagraphCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TypedParagraphCssNamespace.ITypedParagraphCss
}

export = TypedParagraphCssModule
