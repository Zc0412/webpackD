import _ from "lodash";
import "./style.css";
import logo from "./logo512.png";
import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


function component() {
  const element = document.createElement("div");
  // 添加html
  element.innerHTML = _.join(["hello", "webpack"]);
  // 添加class
  element.classList.add("hello");
  // 添加img
  const myLogo = new Image();
  myLogo.src = logo;
  element.appendChild(myLogo);

  // 打印其他类型数据
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());