module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        // no need for "file-loader" package as of webpack v5.
        // https://stackoverflow.com/questions/71251081/webpack-file-loader-outputs-empty-images
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name].[hash][ext]",
        },
      },
    ],
  },
};
