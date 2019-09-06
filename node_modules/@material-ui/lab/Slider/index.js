"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _default = _react.default.forwardRef(function DeprecatedSlider(props, ref) {
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, ['Material-UI: the Slider component was moved from the lab to the core.', '', 'Yay, the component is stable! 🎉', '', "You should use `import { Slider } from '@material-ui/core'`", "or `import Slider from '@material-ui/core/Slider'`"].join('\n')) : void 0;
  return _react.default.createElement(_Slider.default, (0, _extends2.default)({
    ref: ref
  }, props));
});

exports.default = _default;