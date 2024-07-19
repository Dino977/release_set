const fs = require("fs");
const path = require("path");

const components = require("../../components.json"); // 组件配置文件
const componentNames = Object.keys(components); // 组件名称集合
// 定位目标文件夹的绝对路径
const basePath = path.resolve(__dirname, "../../packages/");
// 判断文件是否存在的方法
function fileExists(fullPath) {
  try {
    return fs.statSync(fullPath).isFile();
  } catch (err) {
    return false;
  }
}

componentNames.forEach((name) => {
  // 下述组件，不单独创建样式文件
  if (["icon", "option", "option-group"].includes(name)) return;

  // 由组件名，构建样式文件名称（如：input -> input.scss）
  const fileName = `${name}.scss`;
  // 构建样式文件的全路径
  const fullPath = path.resolve(basePath, "theme-chalk/src", fileName);
  // 判断该样式文件是否存在
  if (!fileExists(fullPath)) {
    // 仅当未存在时，构建空文件
    fs.writeFileSync(fullPath, "", "utf-8");
  }
});

// 覆盖index.scss文件（该文件暴露其余样式内容）
const burstStyleCollection = [
  "@import './base.scss';", // base.scss文件，常用于存储 图标、动画等样式
  componentNames.map((name) => `@import './${name}.scss';`),
];
fs.writeFileSync(
  path.resolve(basePath, "theme-chalk/src/index.scss"),
  burstStyleCollection.join("\n")
);
