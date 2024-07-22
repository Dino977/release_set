const Components = require("../../components.json");
const render = require("json-templater/string");
const uppercamelcase = require("uppercamelcase");
const endOfLine = require("os").EOL;
const path = require("path");
const fs = require("fs");

const OUTPUT_PATH = path.join(__dirname, "../../src/index.js");
const IMPORT_TEMPLATE =
  "import {{upperName}} from '../packages/{{package}}/index.js'";
const MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */
{{include}}

const components = [
  {{list}}
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  {{list}}
};
`;

const ComponentNames = Object.keys(Components);

const includeComponentTemplate = ComponentNames.map((name) =>
  render(IMPORT_TEMPLATE, {
    upperName: uppercamelcase(name),
    package: name,
  })
);

const template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  list: ComponentNames.map((name) => uppercamelcase(name)).join(
    `,${endOfLine}  `
  ),
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log("[build entry] DONE:", OUTPUT_PATH);