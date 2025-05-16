import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    locales: "",
    buildLocales: "",
  };

  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.modules) {
    config.resolve.modules = [];
  }

  if (!config.resolve.extensions) {
    config.resolve.extensions = [];
  }

  if (!config.module) {
    config.module = { rules: [] };
  } else if (!config.module.rules) {
    config.module.rules = [];
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules = (config.module.rules as RuleSetRule[]).map(
    (rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }
  );

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config?.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );
  return config;
};
