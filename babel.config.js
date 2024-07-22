module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "x-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
