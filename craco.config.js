const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");
module.exports = {
  // plugins: [
  //   {
  //     plugin: reactHotReloadPlugin,
  //   },
  // ],
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  // webpack: {
  //   configure: (webpackConfig) => ({
  //     ...webpackConfig,
  //     resolve: {
  //       alias: {
  //         "react-dom": "@hot-loader/react-dom",
  //       },
  //     },
  //   }),
  // },
  // babel: {
  //   plugins: ["react-hot-loader/babel"],
  // },
};
