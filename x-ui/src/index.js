import Button from "../packages/button";
import Input from "../packages/input";

const components = [Button, Input];

const install = function (Vue) {
  console.log("你好世界");

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Button,
  Input,
};
