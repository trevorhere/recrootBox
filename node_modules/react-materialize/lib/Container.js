'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('container', props.className) },
    props.children
  );
};

Container.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = Container;