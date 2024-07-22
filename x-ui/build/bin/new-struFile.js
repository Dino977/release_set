// 引入模块
const path = require("path");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");

// 监听命令行退出
process.on("exit", () => {});

// 判断命令行中是否携带 组件名称（例如 npm run new [xxx]）
const componentName = process.argv[2];
if (!componentName) {
  console.error(
    "Please enter the new component's name.\n- Usage: npm run new [componentName]\n"
  );
  // 退出
  process.exit();
}

/* 判断组件是否已经定义 */
// 获取 components.json 内容
const componentsInfo = require("../../components.json");
if (componentsInfo[componentName]) {
  console.error(
    `The component of [${componentName}] has been defined.\nPlease check it.\n`
  );
  // 退出
  process.exit();
}
// 添加新组件定义
componentsInfo[componentName] = `./packages/${componentName}/index.js`;
// 写入文件
fileSave(path.resolve(__dirname, "../../components.json"))
  .write(JSON.stringify(componentsInfo, null, "  "), "utf8")
  .end("\n");

/* 编辑、创建文件 */
// 编辑相关参数
const humpComponentName = uppercamelcase(componentName); // 驼峰组件名
const packagesPath = path.resolve(__dirname, "../../packages");
const files = [
  // 待创建文件信息集合
  {
    filePath: path.resolve(packagesPath, componentName, "index.js"),
    content: `import ${humpComponentName} from './src/main.vue';

${humpComponentName}.install = function (Vue) {
  Vue.component(${humpComponentName}.name, ${humpComponentName});
};

export default ${humpComponentName};`,
  },
  {
    filePath: path.resolve(packagesPath, componentName, "src/main.vue"),
    content: `<template>
  <div class="x-${humpComponentName}"></div>
</template>

<script>
  export default {
    name: 'X${humpComponentName}',
    data() {
      return {}
    },
  }
</script>

<style lang="less" scoped></style>`,
  },
  {
    filePath: path.resolve(
      packagesPath,
      "./theme-chalk/src",
      `${componentName}.scss`
    ),
    content: `@import "mixins/mixins";
@import "common/var"`,
  },
];

files.forEach(({ filePath, content }) => {
  fileSave(filePath).write(content, "utf8").end("\n");
});
