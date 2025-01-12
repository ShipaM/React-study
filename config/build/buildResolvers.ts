import webpack, { ResolveOptions } from "webpack"; //to access built-in plugins

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
  };
}
