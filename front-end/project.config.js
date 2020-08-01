const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  env: NODE_ENV,
  basePath: __dirname,
  srcDir: "src",
  main: "main",
  outDir: "dist",
  publicPath: "/",
  sourcemaps: "cheap-module-eval-source-map",
  verbose: false,
};
