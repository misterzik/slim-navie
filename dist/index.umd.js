!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-router-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["slim-navie"]={},e.React,e.reactRouterDom)}(this,(function(e,t,a){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(t);e.SlimNav=e=>{const[l,r]=t.useState(!1),[d,i]=t.useState(!1),f=e.config,o=()=>{r(!1),i(!1)},u=()=>{r(!l)},c=t.useRef(),m=e.theme;let s,h;return void 0!==m&&(s=m),"white"===m&&(s="light"),"light"===m&&(s="light"),"dark"===m&&(s=""),"left"===e.float&&(h="nav--left"),"right"===e.float&&(h="nav--right"),n.default.createElement(t.Fragment,null,n.default.createElement("nav",{className:s},n.default.createElement("div",{className:"brand"},n.default.createElement("a",{href:"/",target:"_self",alt:f.brand,tabIndex:"0"},e.children||f.brand)),n.default.createElement("div",{className:"nav-mobile"},n.default.createElement("a",{id:"nav-toggle",href:"#!",onClick:()=>{r(!1),i(!d)}},n.default.createElement("span",null))),n.default.createElement("div",{className:h},n.default.createElement("ul",{className:d?"nav-list nav--display":"nav-list nav--hide"},f.data.map(((e,r)=>n.default.createElement(t.Fragment,{key:r},e._isDropdown?n.default.createElement("li",{key:r},n.default.createElement(t.Fragment,null,e._hasRouter?n.default.createElement(a.Link,{to:e.href,onClick:u,onBlur:u,key:e.id},e.title):n.default.createElement("a",{href:e.href,onBlur:u,id:r,onClick:u,key:e.id},e.title)),n.default.createElement("ul",{className:l?"nav-dropdown nav--display":"nav-dropdown nav--hide",ref:c,id:r},e.dropdown&&e.dropdown.map(((e,t)=>n.default.createElement("li",{key:t},n.default.createElement("a",{href:e.href,onClick:o,onBlur:o,id:t,tabIndex:"0"},e.title)))))):n.default.createElement("li",{key:r},n.default.createElement("a",{href:e.href,alt:e.title,tabIndex:"0",id:r},e.title)))))))))},Object.defineProperty(e,"__esModule",{value:!0})}));