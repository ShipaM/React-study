import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack"; //to access built-in plugins
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"], // Define supported locales
              keyAsDefaultValue: true, // Use key as default value
            },
          ],
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i, // Все файлы с расширением .css,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Вставляет CSS в DOM
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: options.isDev
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader", // Обрабатывает SCSS и компилирует в CSS
    ],
  };

  //If we don't use typescript, we need babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
