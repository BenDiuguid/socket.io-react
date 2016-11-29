'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function socketConnect(Target) {
  const SocketConnect = (props, context) => (0, _react.createElement)(Target, _extends({}, props, {
    socket: context.socket
  }));

  SocketConnect.contextTypes = {
    socket: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object])
  };

  return SocketConnect;
}

exports.default = socketConnect;