import type * as Stylelint from 'stylelint'

export type StylelintLinterOptions = Partial<Stylelint.LinterOptions>;

export type FilterPattern = string | string[];

export type StylelintFormatter = Exclude<StylelintLinterOptions['formatter'], string | undefined>;
export type StylelintFormatterType = Exclude<
  StylelintLinterOptions['formatter'],
  StylelintFormatter | undefined
>;

export interface StylelintPluginOptions extends StylelintLinterOptions {
  dev: boolean;
  build: boolean;
  cache: boolean;
  cacheLocation: string;
  include: FilterPattern;
  exclude: FilterPattern;
  stylelintPath: string;
  formatter: StylelintFormatterType | StylelintFormatter;
  lintInWorker: boolean;
  lintOnStart: boolean;
  chokidar: boolean;
  emitError: boolean;
  emitErrorAsWarning: boolean;
  emitWarning: boolean;
  emitWarningAsError: boolean;
}

export type StylelintPluginUserOptions = Partial<StylelintPluginOptions>;
