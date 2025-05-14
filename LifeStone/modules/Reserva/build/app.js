"use strict";
Liferay.Loader.define("Reserva@1.0.0/app", ['module', 'exports', 'require', 'liferay!frontend-js-react-web$react', './utils/api'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    function _typeof(a) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
        return typeof a;
      } : function (a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, _typeof(a);
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = AppComponent;var _react = _interopRequireWildcard(require("liferay!frontend-js-react-web$react")),
        _api = _interopRequireDefault(require("./utils/api"));function _interopRequireDefault(a) {
      return a && a.__esModule ? a : { default: a };
    }function _interopRequireWildcard(a, b) {
      if ("function" == typeof WeakMap) var c = new WeakMap(),
          d = new WeakMap();return (_interopRequireWildcard = function (a, b) {
        if (!b && a && a.__esModule) return a;var e,
            g,
            h = { __proto__: null, default: a };if (null === a || "object" != _typeof(a) && "function" != typeof a) return h;if (e = b ? d : c) {
          if (e.has(a)) return e.get(a);e.set(a, h);
        }for (var f in a) "default" != f && {}.hasOwnProperty.call(a, f) && ((g = (e = Object.defineProperty) && Object.getOwnPropertyDescriptor(a, f)) && (g.get || g.set) ? e(h, f, g) : h[f] = a[f]);return h;
      })(a, b);
    }function _slicedToArray(a, b) {
      return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest();
    }function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }function _unsupportedIterableToArray(b, c) {
      if (b) {
        if ("string" == typeof b) return _arrayLikeToArray(b, c);var a = {}.toString.call(b).slice(8, -1);return "Object" === a && b.constructor && (a = b.constructor.name), "Map" === a || "Set" === a ? Array.from(b) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(b, c) : void 0;
      }
    }function _arrayLikeToArray(b, c) {
      (null == c || c > b.length) && (c = b.length);for (var d = 0, f = Array(c); d < c; d++) f[d] = b[d];return f;
    }function _iterableToArrayLimit(b, c) {
      var d = null == b ? null : "undefined" != typeof Symbol && b[Symbol.iterator] || b["@@iterator"];if (null != d) {
        var g,
            h,
            j,
            k,
            l = [],
            a = !0,
            m = !1;try {
          if (j = (d = d.call(b)).next, 0 === c) {
            if (Object(d) !== d) return;a = !1;
          } else for (; !(a = (g = j.call(d)).done) && (l.push(g.value), l.length !== c); a = !0);
        } catch (a) {
          m = !0, h = a;
        } finally {
          try {
            if (!a && null != d["return"] && (k = d["return"](), Object(k) !== k)) return;
          } finally {
            if (m) throw h;
          }
        }return l;
      }
    }function _arrayWithHoles(a) {
      if (Array.isArray(a)) return a;
    }function AppComponent(a) {
      var b = (0, _react.useState)([]),
          c = _slicedToArray(b, 2),
          d = c[0],
          e = c[1];return (0, _react.useEffect)(function () {
        _api["default"].get().then(function (a) {
          var b = a.data;return e(b.items);
        });
      }, []), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, d.slice(0, a.configuration.system.number).map(function (a) {
        return (/*#__PURE__*/_react["default"].createElement("div", { className: "container" }, /*#__PURE__*/_react["default"].createElement("h2", null, a.titulo), /*#__PURE__*/_react["default"].createElement("p", null, a.subTitulo), /*#__PURE__*/_react["default"].createElement("div", { className: "infos" }, /*#__PURE__*/_react["default"].createElement("span", null, a.tipoDaNoticia), "|", /*#__PURE__*/_react["default"].createElement("span", null, a.data), "|", /*#__PURE__*/_react["default"].createElement("span", null, a.autor)))
        );
      }));
    }
    //# sourceMappingURL=app.js.map
  }
});
//# sourceMappingURL=app.js.map