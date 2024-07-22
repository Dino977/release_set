module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "@hey_dino/x-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
