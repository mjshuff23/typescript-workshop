"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const logo_svg_1 = __importDefault(require("./logo.svg"));
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsxs)("header", Object.assign({ className: "App-header" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["Edit ", (0, jsx_runtime_1.jsx)("code", { children: "src/App.tsx" }, void 0), " and save to reload."] }, void 0), (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }), void 0)] }), void 0) }), void 0));
}
exports.default = App;
